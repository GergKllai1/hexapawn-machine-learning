import calculateMovementOptions from "./calculateMovementOptionsHelper";

export const move = (location, state) => {
  const previouslySelected = state.selected;
  const previouslyAvailableSquares = [...state.avaliableSquares];
  let selected = location;
  const board = { ...state.board };
  let nextAvaliableSquares = [];
  let endMove = false;
  let round = state.round;
  if (previouslyAvailableSquares.length > 0) {
    previouslyAvailableSquares.forEach(square => {
      if (board[square].location === selected) {
        board[previouslySelected].pawn = null;
        board[square].pawn = null;
        board[square].pawn = "white";
        selected = null;
        round = round + 1;
        endMove = true;
      }
    });
  }
  if (!endMove) {
    if (previouslySelected === selected || board[selected].pawn === null) {
      selected = null;
    } else if (board[selected].pawn === "white") {
      nextAvaliableSquares = calculateMovementOptions(
        state.board,
        selected,
        "white"
      );
    }
  }
  return {
    board: board,
    selected: selected,
    avaliableSquares: nextAvaliableSquares,
    round: round
  };
};
