import React from "react";
import "./PositionEvaluationBar.css";

interface PositionEvaluationBarProps {
  positionEvaluation: number;
  possibleMate?: string; 
}

const PositionEvaluationBar: React.FC<PositionEvaluationBarProps> = ({
  positionEvaluation,
  possibleMate,
}) => {

  const evaluationNormalized = Math.max(-20, Math.min(20, positionEvaluation));

  let whiteHeight = 50 + (evaluationNormalized / 20) * 50;
  let blackHeight = 100 - whiteHeight;

  let whiteColor = "";
  let blackColor = "";

  if (possibleMate) {
    if (positionEvaluation > 0) {
      whiteHeight = 100;
      blackHeight = 0;
      whiteColor = "white";  
    } else {
      blackHeight = 100;
      whiteHeight = 0;
      blackColor = "black";  
    }
  }

  return (
    <div className="evaluation-bar">
      <div
        className="evaluation-section black-section"
        style={{
          height: `${blackHeight}%`,
          position: "relative",
          backgroundColor: blackColor,
        }}
      >
        {possibleMate && positionEvaluation < 0 && (
          <span className="possible-mate black-mate">M{possibleMate}</span>
        )}
        {!possibleMate && positionEvaluation < 0 && (
          <span className="evaluation-value">{positionEvaluation}</span>
        )}
      </div>

      <div
        className="evaluation-section white-section"
        style={{
          height: `${whiteHeight}%`,
          position: "relative",
          backgroundColor: whiteColor,
        }}
      >
        {possibleMate && positionEvaluation > 0 && (
          <span className="possible-mate white-mate">M{possibleMate}</span>
        )}
        {!possibleMate && positionEvaluation > 0 && (
          <span className="evaluation-value">{positionEvaluation}</span>
        )}
      </div>
    </div>
  );
};

export default PositionEvaluationBar;
