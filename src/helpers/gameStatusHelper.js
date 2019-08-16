import createBoardArray from "./boardArrayHelper";
import calculateMovementOptions from "./calculateMovementOptionsHelper";
import { playerRules } from "./boardStateHelper";

const isTheGameEnded = (board, player, enemy) => {
  const boardArray = createBoardArray(board);
  let allavAilableMoves = [];
  let winner = "unresolved";
  boardArray.forEach(b => {
    if (b.pawn === enemy) {
      if (b.location[0] === playerRules[enemy].win) {
        winner = enemy;
      }
    }
    if (winner === "unresolved" && b.pawn === player) {
      if (b.location[0] === playerRules[player].win) {
        winner = player;
      } else if (winner === "unresolved") {
        const availableMoves = calculateMovementOptions(
          board,
          b.location,
          player
        );
        allavAilableMoves = allavAilableMoves.concat(availableMoves);
      }
    }
  });
  if (winner === "unresolved" && allavAilableMoves.length === 0) {
    winner = enemy;
  }
  return winner;
};


export default isTheGameEnded;
