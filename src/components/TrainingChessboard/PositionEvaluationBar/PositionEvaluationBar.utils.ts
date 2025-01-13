export const getEvaluationBarHeight = (
  positionEvaluation: number,
  possibleMate?: string
) => {
  const offset = 20;
  const wholeRange = 100;
  const evaluationNormalized = Math.max(
    -offset,
    Math.min(offset, positionEvaluation)
  );

  let whiteHeight = wholeRange / 2 + (evaluationNormalized / offset) * 50;
  let blackHeight = wholeRange - whiteHeight;

  if (possibleMate) {
    if (positionEvaluation > 0) {
      whiteHeight = 100;
      blackHeight = 0;
    } else {
      blackHeight = 100;
      whiteHeight = 0;
    }
  }

  return { whiteHeight, blackHeight };
};
