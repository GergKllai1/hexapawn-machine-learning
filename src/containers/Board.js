import React, { Component } from "react";
import "./Board.css";
import whitePawn from "../assets/whitePawn.png";
import blackPawn from "../assets/blackPawn.png";
import Pawn from "../componets/Pawn";

export class Board extends Component {
  state = {
    board: [
      { location: "a1", color: "black", pawn: blackPawn },
      { location: "a2", color: "white", pawn: blackPawn },
      { location: "a3", color: "black", pawn: blackPawn },
      { location: "b1", color: "white", pawn: null },
      { location: "b2", color: "black", pawn: null },
      { location: "b3", color: "white", pawn: null },
      { location: "c1", color: "black", pawn: whitePawn },
      { location: "c2", color: "white", pawn: whitePawn },
      { location: "c3", color: "black", pawn: whitePawn }
    ]
  };

  render() {
    const boardWithPieces = this.state.board.map(b => {
      return (
        <div className={`${b.location} ${b.color} field `}>
          <Pawn pawn={b.pawn} />
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
