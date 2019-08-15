import createBoardArray from "./boardArrayHelper";
import calculateMovementOptions from "./calculateMovementOptionsHelper";
import { playerRules } from "./boardStateHelper";

const isTheGameEnded = (board, player, enemy) => {
  const boardArray = createBoardArray(board);
  let allavAilableMoves = [];
  let gameStatus = "unresolved";
  boardArray.forEach(b => {
    if (b.pawn === enemy) {
      if (b.location[0] === playerRules[enemy].win) {
        gameStatus = "lost";
      }
    }
    if (gameStatus === "unresolved" && b.pawn === player) {
      if (b.location[0] === playerRules[player].win) {
        gameStatus = "win";
      } else if (gameStatus === "unresolved") {
        const availableMoves = calculateMovementOptions(
          board,
          b.location,
          player
        );
        allavAilableMoves = allavAilableMoves.concat(availableMoves);
      }
    }
  });
  if (gameStatus === "unresolved" && allavAilableMoves.length === 0) {
    gameStatus = "lost";
  }
  return gameStatus;
};

export default isTheGameEnded;
