import { useMemo } from "react";
import "./PositionEvaluationBar.css";
import { getEvaluationBarHeight } from "./PositionEvaluationBar.utils";

interface PositionEvaluationBarProps {
  possibleMate?: string;
  positionEvaluation: number;
  gameOverMessage?: string | null;
}

const PositionEvaluationBar = ({
  possibleMate,
  positionEvaluation,
  gameOverMessage,
}: PositionEvaluationBarProps) => {
  const ev = positionEvaluation ?? 0;
  const { whiteHeight, blackHeight } = getEvaluationBarHeight(
    ev,
    possibleMate,
    gameOverMessage
  );

  const evaluationLabel = gameOverMessage
    ? gameOverMessage
    : possibleMate
    ? `M${possibleMate}`
    : positionEvaluation;

  const evaluationClassname =
    possibleMate || gameOverMessage ? "" : "evaluation-value";

  const isWhiteAdvantage = ev > 0;
  const isBlackAdvantage = ev < 0;

  console.log(possibleMate);

  return (
    <div className="evaluation-bar">
      <div
        className="evaluation-section black-section"
        style={{
          height: `${blackHeight}%`,
        }}
      >
        {isBlackAdvantage && (
          <span className={evaluationClassname}>
            {gameOverMessage || evaluationLabel}
          </span>
        )}
      </div>

      <div
        className="evaluation-section white-section"
        style={{
          height: `${whiteHeight}%`,
        }}
      >
        {isWhiteAdvantage && (
          <span className={evaluationClassname}>
            {gameOverMessage || evaluationLabel}
          </span>
        )}
      </div>
    </div>
  );
};

export default PositionEvaluationBar;
