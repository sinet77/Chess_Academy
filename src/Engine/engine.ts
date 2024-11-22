/*!
 * Stockfish.js (http://github.com/nmrugg/stockfish.js)
 * License: GPL
 */

/*
 * Description of the universal chess interface (UCI)  https://gist.github.com/aliostad/f4470274f39d29b788c1b09519e67372/
 */

const stockfish = new Worker("/stockfish.js");

type EngineMessage = {
  /** stockfish engine message in UCI format */
  uciMessage: string;
  /** found best move for current position in format `e2e4` */
  bestMove?: string;
  /** found best move for opponent in format `e7e5` */
  ponder?: string;
  /** material balance's difference in centipawns (IMPORTANT! stockfish gives the cp score in terms of whose turn it is) */
  positionEvaluation?: string;
  /** count of moves until mate */
  possibleMate?: string;
  /** the best line found */
  pv?: string;
  /** number of halfmoves the engine looks ahead */
  depth?: number;
};

export default class Engine {
  stockfish: Worker;
  onMessage: (callback: (messageData: EngineMessage) => void) => void;
  isReady: boolean;

  constructor() {
    this.stockfish = stockfish;
    this.isReady = false;

    // Function to listen to engine messages
    this.onMessage = (callback: (messageData: EngineMessage) => void) => {
      this.stockfish.addEventListener("message", (e: MessageEvent<string>) => {
        callback(this.transformSFMessageData(e));
      });
    };

    this.init();
  }

  /**
   * Transform Stockfish's raw message data into a structured object
   */
  private transformSFMessageData(e: MessageEvent<string> | string): EngineMessage {
    const uciMessage = typeof e === "string" ? e : e.data;

    return {
      uciMessage,
      bestMove: uciMessage.match(/bestmove\s+(\S+)/)?.[1],
      ponder: uciMessage.match(/ponder\s+(\S+)/)?.[1],
      positionEvaluation: uciMessage.match(/cp\s+(\S+)/)?.[1],
      possibleMate: uciMessage.match(/mate\s+(\S+)/)?.[1],
      pv: uciMessage.match(/ pv\s+(.*)/)?.[1],
      depth: Number(uciMessage.match(/ depth\s+(\S+)/)?.[1]) ?? 0,
    };
  }

  /**
   * Initialize the engine and prepare it for use
   */
  private init() {
    this.stockfish.postMessage("uci");
    this.stockfish.postMessage("isready");

    this.onMessage(({ uciMessage }) => {
      if (uciMessage === "readyok") {
        this.isReady = true;
      }
    });
  }

  /**
   * Register a callback to execute when the engine is ready
   */
  onReady(callback: () => void) {
    this.onMessage(({ uciMessage }) => {
      if (uciMessage === "readyok") {
        callback();
      }
    });
  }

  /**
   * Start evaluating the position with a given depth
   */
  evaluatePosition(fen: string, depth: number = 12) {
    if (depth > 24) depth = 24;

    this.stockfish.postMessage(`position fen ${fen}`);
    this.stockfish.postMessage(`go depth ${depth}`);
  }

  /**
   * Stop the engine's current calculations
   */
  stop() {
    this.stockfish.postMessage("stop");
  }

  /**
   * Terminate the engine's process
   */
  terminate() {
    this.isReady = false;
    this.stockfish.postMessage("quit");
  }
}
