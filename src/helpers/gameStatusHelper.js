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
        console.log(player, b.location);
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
  if (gameStatus === "unresolved" && allavailableMoves.length === 0) {
    gameStatus = "lost";
  }
  gameStatus !== 'unresolved' && console.log(board)
  console.log(player, gameStatus);
  return gameStatus;
};

export default isTheGameEnded;
