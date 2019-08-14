import React, { Component } from "react";
import "./Board.css";
import Square from "../componets/Square";
import { move } from "../helpers/moveHelper";
import createBoardArray from "../helpers/boardArrayHelper";
import { createInitialBoardState } from "../helpers/boardStateHelper";
import isTheGameEnded from "../helpers/gameStatusHelper";

export class Board extends Component {
  state = {
    board: createInitialBoardState(),
    selected: null,
    avaliableSquares: [],
    round: 0,
    playerWon: 0,
    aiWon: 0
  };

  handleFieldSelect = (location) => {
    const payload = move(location, this.state);
    const gameStatus = isTheGameEnded(payload.board, "white");
    if (gameStatus === "win") {
      payload.playerWon = this.state.playerWon + 1;
      payload.board = createInitialBoardState();
    }
    this.setState(payload);
  };
  render() {
    const boardArray = createBoardArray(this.state.board);
    const boardWithPieces = boardArray.map(b => {
      return (
        <Square
          avaliableSquares={this.state.avaliableSquares}
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
