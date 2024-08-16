import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { MovePair } from "./ChessBoardDisplay.types";
import { Button } from "@mui/material";

export default function ChessboardDisplay() {
  const [chess] = useState<Chess>(new Chess()); // Tworzymy instancję Chess
  const [fen, setFen] = useState<string>(chess.fen()); // Stan do przechowywania FEN (pozycja szachowa)
  const [history, setHistory] = useState<MovePair[]>([]); // Stan do przechowywania historii ruchów
  const [changeBoardOrientation, setChangeBoardOrientation] = useState<
    "white" | "black"
  >("white");

  function handleBoardOrientation() {
    setChangeBoardOrientation((prevBoardOrientation) =>
      prevBoardOrientation === "white" ? "black" : "white"
    );
  }

  useEffect(() => {
    const makeRandomMove = () => {
      if (!chess.isGameOver()) {
        const moves = chess.moves();
        const move = moves[Math.floor(Math.random() * moves.length)];
        chess.move(move);
        setFen(chess.fen()); // Aktualizacja FEN, aby odświeżyć szachownicę

        const currentHistory = chess.history();
        const updatedHistory = [];

        // Grupowanie ruchów białych i czarnych
        for (let i = 0; i < currentHistory.length; i += 2) {
          updatedHistory.push({
            white: currentHistory[i],
            black: currentHistory[i + 1] || "", // W przypadku gdy ruch czarnych nie istnieje, bo np. gra zakończyła się po ruchu białych
          });
        }

        setHistory(updatedHistory);
      }
    };

    const intervalId = setInterval(makeRandomMove, 100000); // Co 1 sekundę wykonuje losowy ruch

    return () => clearInterval(intervalId);
  }, [chess]);

  return (
    <div style={{ width: "400px" }}>
      <Chessboard
        id="BasicChessboard"
        position={fen}
        arePiecesDraggable={false}
        boardOrientation={changeBoardOrientation}
      />
      <div>
        <Button onClick={handleBoardOrientation}>Swap</Button>
        <h3>Historia ruchów:</h3>
        <table>
          <thead>
            <tr>
              <th>Ruch</th>
              <th>Białe</th>
              <th>Czarne</th>
            </tr>
          </thead>
          <tbody>
            {history.map((move, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{move.white}</td>
                <td>{move.black}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
