import calculateMovementOptions from "./calculateMovementOptionsHelper";
import createBoardArray from "./boardArrayHelper";

export const playerMove = (location, state) => {
  const previouslySelected = state.selected;
  const previouslyAvailableSquares = [...state.availableSquares];
  let selected = location;
  const board = { ...state.board };
  let nextavailableSquares = [];
  let endMove = false;
  let round = state.round;
  if (previouslyAvailableSquares.length > 0) {
    previouslyAvailableSquares.forEach(square => {
      if (board[square].location === selected) {
        board[previouslySelected].pawn = null;
        board[square].pawn = null;
        board[square].pawn = "white";
        selected = null;
        round++;
        endMove = true;
      }
    });
  }
  if (!endMove) {
    if (previouslySelected === selected || board[selected].pawn === null) {
      selected = null;
    } else if (board[selected].pawn === "white") {
      nextavailableSquares = calculateMovementOptions(
        state.board,
        selected,
        "white"
      );
    }
  }
  return {
    board: board,
    selected: selected,
    availableSquares: nextavailableSquares,
    round: round
  };
};

export const aiMove = board => {
  const allAvailableAiMoves = {};
  const boardArray = createBoardArray(board);
  boardArray.forEach(b => {
    if (b.pawn === "black") {
      const availableMoves = calculateMovementOptions(
        board,
        b.location,
        "black"
      );
      if (availableMoves.length > 0) {
        allAvailableAiMoves[b.location] = availableMoves;
      }
    }
  });
  const availablePieces = Object.keys(allAvailableAiMoves);
  const selectedPiece = randomize(availablePieces)
  const availabledMoves = allAvailableAiMoves[selectedPiece];
  const selectedMove = randomize(availabledMoves);
  const finalAiMove = {[selectedPiece]: selectedMove};
  return finalAiMove;
};

const randomize = array => {
  const randomNumber = Math.floor(Math.random() * array.length)
  return array[randomNumber]
};
