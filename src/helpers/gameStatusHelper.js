import createBoardArray from "./boardArrayHelper";
import calculateMovementOptions from "./calculateMovementOptionsHelper";
import { playerRules } from "./boardStateHelper";

const isTheGameEnded = (board, player) => {
  const boardArray = createBoardArray(board);
  let allAvaliableMoves = [];
  let gameStatus = "unresolved";
  boardArray.forEach(b => {
    if (b.pawn === player) {
      if (b.location[0] === playerRules[player].win) {
        gameStatus = "win";
      } else if (gameStatus === "unresolved") {
        const avaliableMoves = calculateMovementOptions(
          board,
          b.location,
          player
        );
        allAvaliableMoves = allAvaliableMoves.concat(avaliableMoves);
      }
    }
  });
  if ((gameStatus ==='unresolved' && allAvaliableMoves.length === 0)) {
    gameStatus = "lost";
  }
  return gameStatus;
};

export default isTheGameEnded;
