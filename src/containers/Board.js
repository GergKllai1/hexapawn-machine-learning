import React, { Component } from "react";
import "./Board.css";
import Square from "../componets/Square";
import { move } from "../helpers/moveHelper";
import createBoardArray from "../helpers/boardArrayHelper";
import { board } from "./BoardState";

export class Board extends Component {
  state = {
    board: board,
    selected: null,
    avaliableSquares: []
  };

  handleFieldSelect = location => {
    const payload = move(location, this.state);
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
        <div className="board">{boardWithPieces}</div>
      </div>
    );
  }
}

export default Board;
