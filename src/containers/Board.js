import React, { Component } from "react";
import "./Board.css";
import Square from "../componets/Square";
import { playerMove, aiMove } from "../helpers/moveHelper";
import createBoardArray from "../helpers/boardArrayHelper";
import { createInitialBoardState } from "../helpers/boardStateHelper";
import isTheGameEnded from "../helpers/gameStatusHelper";

export class Board extends Component {
  state = {
    board: createInitialBoardState(),
    selected: null,
    availableSquares: [],
    round: 1,
    playerWon: 0,
    aiWon: 0
  };

  handleFieldSelect = location => {
    const payload = playerMove(location, this.state);
    const gameStatus = isTheGameEnded(payload.board, "white");
    if (gameStatus === "win") {
      payload.playerWon = this.state.playerWon + 1;
      payload.board = createInitialBoardState();
      payload.round = 1
    }
    else if (payload.round % 2 === 0) {
      const ai = aiMove(payload.board);
      const pieceToMove = Object.keys(ai)[0];
      const squareToMove = Object.values(ai)[0];
      payload.board[pieceToMove].pawn = null;
      payload.board[squareToMove].pawn = "black";
      payload.round++;
    }
    this.setState(payload);
  };
  render() {
    const boardArray = createBoardArray(this.state.board);
    const boardWithPieces = boardArray.map(b => {
      return (
        <Square
          availableSquares={this.state.availableSquares}
          selected={this.state.selected}
          clicked={this.handleFieldSelect}
          b={b}
          key={b.location}
        />
      );
    });
    return (
      <div className="board-container">
        <div>
          <div className="game-counter">
            <p>Games won by player:</p>
            <p>{this.state.playerWon}</p>
          </div>
          <div className="game-counter">
            <p>Games won by AI:</p>
            <p>{this.state.aiWon}</p>
          </div>
        </div>
        <div className="board">{boardWithPieces}</div>
      </div>
    );
  }
}

export default Board;
