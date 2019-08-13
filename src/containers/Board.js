import React, { Component } from "react";
import "./Board.css";
import whitePawn from "../assets/whitePawn.png";
import blackPawn from "../assets/blackPawn.png";
import Square from "../componets/Square";

export class Board extends Component {
  state = {
    board: {
      a1: { location: "a1", color: "black", pawn: blackPawn },
      a2: { location: "a2", color: "white", pawn: blackPawn },
      a3: { location: "a3", color: "black", pawn: blackPawn },
      b1: { location: "b1", color: "white", pawn: null },
      b2: { location: "b2", color: "black", pawn: blackPawn },
      b3: { location: "b3", color: "white", pawn: null },
      c1: { location: "c1", color: "black", pawn: whitePawn },
      c2: { location: "c2", color: "white", pawn: whitePawn },
      c3: { location: "c3", color: "black", pawn: whitePawn }
    },
    selected: null,
    avaliableSquares: []
  };

  handleFieldSelect = e => {
    const previouslySelected = this.state.selected;
    const previouslyAvailableSquares = [...this.state.avaliableSquares];
    let selected = e.target.id;
    const board = { ...this.state.board };
    if (previouslySelected) {
      board[previouslySelected].selected = false;
    }
    if (previouslyAvailableSquares) {
      previouslyAvailableSquares.forEach(square => {
        board[square].avaliable = false;
      });
    }
    let nextAvaliableSquares = [];
    if (previouslySelected !== selected) {
      board[selected].selected = true;
      nextAvaliableSquares = this.calculateMovementOptions(selected, "white");
      nextAvaliableSquares.forEach(square => {
        board[square].avaliable = true;
      });
    }
    this.setState({
      board: board,
      selected: selected,
      avaliableSquares: nextAvaliableSquares
    });
  };

  calculateMovementOptions = (location, player) => {
    const playerRules = {
      white: { movementOrder: ["c", "b", "a"], enemy: blackPawn },
      black: { movementOrder: ["a", "b", "c"], enemy: whitePawn }
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
    
    const nextLocation = [];
    if (this.state.board[squareToMove].pawn === null) {
      nextLocation.push(squareToMove);
    }
    squaresToHit.forEach(square => {
      if (this.state.board[square].pawn === playerRules[player].enemy) {
        nextLocation.push(square);
      }
    });
    return nextLocation;
  };

  render() {
    const boardArray = [];
    for (let key in this.state.board) {
      boardArray.push(this.state.board[key]);
    }
    const boardWithPieces = boardArray.map(b => {
      return (
        <div
          key={b.location}
          className={`${b.location} ${b.color} square ${b.selected &&
            "selected"} ${b.avaliable && "avaliable"} ${b.avaliable &&
            b.pawn &&
            "toHit"}`}
        >
          <Square
            clicked={this.handleFieldSelect}
            id={b.location}
            pawn={b.pawn}
          />
        </div>
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
