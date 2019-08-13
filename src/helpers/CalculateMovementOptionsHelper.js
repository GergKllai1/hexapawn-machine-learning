export const calculateMovementOptions = (board, location, player) => {
  const playerRules = {
    white: { movementOrder: ["c", "b", "a"], enemy: 'black' },
    black: { movementOrder: ["a", "b", "c"], enemy: 'white' }
  };
  const locationLetter = location[0];
  const locationNumber = location[1];
  const locationLetterIndex = playerRules[player].movementOrder.indexOf(
    locationLetter
  );
  let nextLocationLetter =
    playerRules[player].movementOrder[locationLetterIndex + 1];
  const squareToMove = nextLocationLetter + locationNumber;
  const squaresToHit = [];
  switch (locationNumber) {
    case "1":
    case "3":
      squaresToHit.push(nextLocationLetter + "2");
      break;
    case "2":
      squaresToHit.push(nextLocationLetter + "1", nextLocationLetter + "3");
      break;
    default:
      console.log("Something went wrong");
  }
  debugger;
  const nextLocation = [];
  if (board[squareToMove].pawn === null) {
    nextLocation.push(squareToMove);
  }
  squaresToHit.forEach(square => {
    if (board[square].pawn === playerRules[player].enemy) {
      nextLocation.push(square);
    }
  });
  return nextLocation;
};