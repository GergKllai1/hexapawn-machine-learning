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
    aiWon: 0,
    gameOver: false,
    winner: ""
  };

  handleFieldSelect = location => {
    const payload = playerMove(location, this.state);
    let winner = "";
    if (payload.round % 2 === 0) {
      winner = isTheGameEnded(payload.board);
      if (winner !== "unresolved") {
        this.increaseWinCount(payload, winner);
        this.gameOver(winner);
      } else {
        const ai = aiMove(payload.board);
        const pieceToMove = Object.keys(ai)[0];
        const squareToMove = Object.values(ai)[0];
        payload.board[pieceToMove].pawn = null;
        payload.board[squareToMove].pawn = "black";
        payload.round++;
        winner = isTheGameEnded(payload.board, "white", "black");
        if (winner !== "unresolved") {
          this.increaseWinCount(payload, winner);
          this.setState({ gameOver: true });
        }
      }
    }
    this.setState(payload);
  };

  gameOver = winner => {
    this.setState({
      gameOver: true,
      winner: winner
    });
  };

  resetBoard = payload => {
    this.setState({
      board: createInitialBoardState(),
      round: 1,
      gameOver: false,
      winner: ""
    });
  };

  increaseWinCount = (payload, winner) => {
    winner === "white"
      ? (payload.playerWon = this.state.playerWon + 1)
      : (payload.aiWon = this.state.aiWon + 1);
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
          {this.state.gameOver && (
            <div>
              <h1>GAME OVER</h1>
              <button onClick={this.resetBoard}>New Game</button>
            </div>
          )}
        </div>
        <div className="board">{boardWithPieces}</div>
      </div>
    );
  }
}

export default Board;
