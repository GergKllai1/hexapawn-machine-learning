import React, { Component } from "react";
import "./Board.css";
import whitePawn from "../assets/whitePawn.png";
import blackPawn from "../assets/blackPawn.png";
import Square from "../componets/Square";
import { calculateMovementOptions } from "../helpers/calculateMovementOptionsHelper";

export class Board extends Component {
  state = {
    board: {
      a1: {
        location: "a1",
        color: "black",
        pawn: blackPawn,
        pawnName: "blackPawn"
      },
      a2: {
        location: "a2",
        color: "white",
        pawn: blackPawn,
        pawnName: "blackPawn"
      },
      a3: {
        location: "a3",
        color: "black",
        pawn: blackPawn,
        pawnName: "blackPawn"
      },
      b1: { location: "b1", color: "white", pawn: null, pawnName: "" },
      b2: {
        location: "b2",
        color: "black",
        pawn: blackPawn,
        pawnName: "blackPawn"
      },
      b3: { location: "b3", color: "white", pawn: null, pawnName: "" },
      c1: {
        location: "c1",
        color: "black",
        pawn: whitePawn,
        pawnName: "whitePawn"
      },
      c2: {
        location: "c2",
        color: "white",
        pawn: whitePawn,
        pawnName: "whitePawn"
      },
      c3: {
        location: "c3",
        color: "black",
        pawn: whitePawn,
        pawnName: "whitePawn"
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
          board[square].pawn = whitePawn;
          selected = null;
        }
      });
    }
    if (previouslySelected === selected) {
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
