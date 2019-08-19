const createBoardArray = board => {
  const boardArray = [];
  for (let key in board) {
    boardArray.push(board[key]);
  }
  return boardArray;
};

export default createBoardArray;
