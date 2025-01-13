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
  gameOverMessage
}: PositionEvaluationBarProps) => {

  const {whiteHeight, blackHeight } =
    getEvaluationBarHeight( positionEvaluation, possibleMate );
    

    const evaluationLabel = gameOverMessage 
    ? gameOverMessage 
    : possibleMate 
      ? `M${possibleMate}` 
      : positionEvaluation;

  const evaluationClassname = possibleMate || gameOverMessage ? "" : "evaluation-value";  

  const isWhiteAdvantage = useMemo(() => positionEvaluation > 0, [positionEvaluation]);
  const isBlackAdvantage = useMemo(() => positionEvaluation < 0, [positionEvaluation]);
  
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
