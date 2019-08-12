import React, { Component } from "react";
import "./Board.css";
import whitePawn from "../assets/whitePawn.png";
import blackPawn from "../assets/blackPawn.png";
import Pawn from "../componets/Pawn";

export class Board extends Component {
  render() {
    return (
      <div className="board-container">
        <div className="board">
          <div className="a black field">
            <Pawn pawn={blackPawn} />
          </div>
          <div className="b white field">
            <Pawn pawn={blackPawn} />
          </div>
          <div className="c black field">
            <Pawn pawn={blackPawn} />
          </div>
          <div className="d white field" />
          <div className="e black field" />
          <div className="f white field" />
          <div className="g black field">
            <Pawn pawn={whitePawn} />
          </div>
          <div className="h white field">
            <Pawn pawn={whitePawn} />
          </div>
          <div className="i black field">
            <Pawn pawn={whitePawn} />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
