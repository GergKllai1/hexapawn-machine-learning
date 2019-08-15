import createBoardArray from "./boardArrayHelper";
import calculateMovementOptions from "./calculateMovementOptionsHelper";
import { playerRules } from "./boardStateHelper";

const isTheGameEnded = (board, player) => {
  const boardArray = createBoardArray(board);
  let allavailableMoves = [];
  let gameStatus = "unresolved";
  boardArray.forEach(b => {
    if (b.pawn === player) {
      if (b.location[0] === playerRules[player].win) {
        gameStatus = "win";
      } else if (gameStatus === "unresolved") {
        const availableMoves = calculateMovementOptions(
          board,
          b.location,
          player
        );
        allavailableMoves = allavailableMoves.concat(availableMoves);
      }
    }
  });
  if ((gameStatus ==='unresolved' && allavailableMoves.length === 0)) {
    gameStatus = "lost";
  }
  return gameStatus;
};

export default isTheGameEnded;
