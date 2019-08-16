import createBoardArray from "./boardArrayHelper";
import calculateMovementOptions from "./calculateMovementOptionsHelper";
import { playerRules } from "./boardStateHelper";

const isTheGameEnded = (board) => {
  const boardArray = createBoardArray(board);
  let allAvailableMovesForWhite = [];
  let allAvilableMovesForBlack = [];
  let winner = "unresolved";
  boardArray.forEach(b => {
    if (b.pawn === 'white' && b.location[0] === playerRules["white"].win) {
      winner = "white";
    } else if (
      winner === "unresolved" &&
      b.pawn === 'black' &&
      b.location[0] === playerRules["black"].win
    ) {
      winner = "black";
    } else if (winner === "unresolved" && b.pawn === "white") {
      const availableMoves = calculateMovementOptions(
        board,
        b.location,
        'white'
      );
      allAvailableMovesForWhite = allAvailableMovesForWhite.concat(
        availableMoves
      );
    } else if (winner === "unresolved" && b.pawn === "black") {
      const availableMoves = calculateMovementOptions(
        board,
        b.location,
        'black'
      );
      allAvilableMovesForBlack = allAvilableMovesForBlack.concat(
        availableMoves
      );
    }
  });
  if (winner === "unresolved" && allAvailableMovesForWhite.length === 0) {
    winner = "black";
  } else if (winner === "unresolved" && allAvilableMovesForBlack.length === 0) {
    winner = "white";
  }
  return winner;
};

export default isTheGameEnded;
