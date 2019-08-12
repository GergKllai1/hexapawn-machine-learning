import React, { Component } from "react";
import "./Board.css";

export class Board extends Component {
  render() {
    return (
      <div className='board-container'>
        <div className="board">
          <div className="a black" />
          <div className="b white" />
          <div className="c black" />
          <div className="d white" />
          <div className="e black" />
          <div className="f white" />
          <div className="g black" />
          <div className="h white" />
          <div className="i black" />
        </div>
      </div>
    );
  }
}

export default Board;
