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
  const gameHistory = [...state.gameHistory];
  let playerMove = "";
  if (previouslyAvailableSquares.length > 0) {
    previouslyAvailableSquares.forEach(square => {
      if (board[square].location === selected) {
        board[previouslySelected].pawn = null;
        board[square].pawn = null;
        board[square].pawn = "white";
        selected = null;
        playerMove = previouslySelected + square;
        gameHistory.push(playerMove);
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
    round: round,
    gameHistory: gameHistory,
    aiWon: state.aiWon,
    playerWon: state.playerWon
  };
};

export const aiMove = (payload, losingMoves) => {
  const allAvailableAiMoves = {};
  const boardArray = createBoardArray(payload.board);
  let losingMatches = [];
  let currentGame = payload.gameHistory;
  losingMatches = losingMoves.filter(lostMatch =>
    lostMatch.join("").includes(currentGame.join(""))
  );

  boardArray.forEach(b => {
    if (b.pawn === "black") {
      let availableMoves = calculateMovementOptions(
        payload.board,
        b.location,
        "black"
      );
      if (availableMoves.length > 0) {
        losingMatches.forEach(lostMatch => {
          let nextMove = lostMatch[currentGame.length];
          let lastMove = lostMatch[currentGame.length + 2] ? false : true
          if (nextMove && lastMove) {
            if (nextMove.slice(0, 2) === b.location) {
              availableMoves = availableMoves.filter(
                el => el !== nextMove.slice(2, 4)
              );
            }
          }
        });
        if (availableMoves.length > 0) {
          allAvailableAiMoves[b.location] = availableMoves;
        }
      }
    }
  });
  console.log(allAvailableAiMoves);
  const availablePieces = Object.keys(allAvailableAiMoves);
  const selectedPiece = randomize(availablePieces);
  const availabledMoves = allAvailableAiMoves[selectedPiece];
  const selectedMove = randomize(availabledMoves);
  const finalAiMove = { [selectedPiece]: selectedMove };
  return finalAiMove;
};

const randomize = array => {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
};
