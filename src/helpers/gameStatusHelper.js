import createBoardArray from "./boardArrayHelper";
import calculateMovementOptions from "./calculateMovementOptionsHelper";

const isTheGameEnded = (board, player) => {
  const boardArray = createBoardArray(board);
  boardArray.forEach(b => {
    if (b.pawn === player) {
      if(b.location[0] === 'c')
      calculateMovementOptions(board, b.location, player);
    }
  });
};

export default isTheGameEnded;
