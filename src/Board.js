import React, { Component } from "react";
import "./Board.css";
import whitePawn from "./assets/whitePawn.png";
import blackPawn from "./assets/blackPawn.png";

export class Board extends Component {
  render() {
    return (
      <div className="board-container">
        <div className="board">
          <div className="a black field">
            <img className="pawn" src={blackPawn} alt="" />
          </div>
          <div className="b white field">
            <img className="pawn" src={blackPawn} alt="" />
          </div>
          <div className="c black field">
            <img className="pawn" src={blackPawn} alt="" />
          </div>
          <div className="d white field" />
          <div className="e black field" />
          <div className="f white field" />
          <div className="g black field">
            <img className="pawn" src={whitePawn} alt="" />
          </div>
          <div className="h white field">
            <img className="pawn" src={whitePawn} alt="" />
          </div>
          <div className="i black field">
            <img className="pawn" src={whitePawn} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
