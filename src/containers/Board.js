import React, { Component } from "react";
import "./Board.css";
import Square from "../componets/Square";
import { calculateMovementOptions } from "../helpers/calculateMovementOptionsHelper";

export class Board extends Component {
  state = {
    board: {
      a1: {
        location: "a1",
        color: "black",
        pawn: "black"
      },
      a2: {
        location: "a2",
        color: "white",
        pawn: "black"
      },
      a3: {
        location: "a3",
        color: "black",
        pawn: "black"
      },
      b1: { location: "b1", color: "white", pawn: null },
      b2: {
        location: "b2",
        color: "black",
        pawn: "black"
      },
      b3: { location: "b3", color: "white", pawn: null },
      c1: {
        location: "c1",
        color: "black",
        pawn: "white"
      },
      c2: {
        location: "c2",
        color: "white",
        pawn: "white"
      },
      c3: {
        location: "c3",
        color: "black",
        pawn: "white"
      }
    },
    selected: null,
    avaliableSquares: []
  };

  handleFieldSelect = location => {
    const previouslySelected = this.state.selected;
    const previouslyAvailableSquares = [...this.state.avaliableSquares];
    let selected = location;
    const board = { ...this.state.board };
    let nextAvaliableSquares = [];
    if (previouslyAvailableSquares.length > 0) {
      previouslyAvailableSquares.forEach(square => {
        if (board[square].location === selected) {
          board[previouslySelected].pawn = null;
          board[square].pawn = null;
          board[square].pawn = "white";
          selected = null;
        }
      });
    } else if (
      previouslySelected === selected ||
      board[selected].pawn === null
    ) {
      selected = null;
    } else {
      nextAvaliableSquares = calculateMovementOptions(
        this.state.board,
        selected,
        "white"
      );
    }
    this.setState({
      board: board,
      selected: selected,
      avaliableSquares: nextAvaliableSquares
    });
  };
  render() {
    const boardArray = [];
    for (let key in this.state.board) {
      boardArray.push(this.state.board[key]);
    }
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
