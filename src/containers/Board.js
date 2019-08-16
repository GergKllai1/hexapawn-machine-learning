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
    gameOver: false
  };

  handleFieldSelect = location => {
    const payload = playerMove(location, this.state);
    let playerStatus = "unresolved";
    let aiStatus = "unresolved";
    if (payload.round % 2 === 0) {
      aiStatus = isTheGameEnded(payload.board, "black", "white");
      if (aiStatus !== "unresolved") {
        this.increaseWinCount(payload, aiStatus, "black");
        this.setState({ gameOver: true });
      } else {
        const ai = aiMove(payload.board);
        const pieceToMove = Object.keys(ai)[0];
        const squareToMove = Object.values(ai)[0];
        payload.board[pieceToMove].pawn = null;
        payload.board[squareToMove].pawn = "black";
        payload.round++;
        playerStatus = isTheGameEnded(payload.board, "white", "black");
        if (playerStatus !== "unresolved") {
          this.increaseWinCount(payload, playerStatus, "white");
          this.setState({ gameOver: true });
        }
      }
    }
    this.setState(payload);
  };

  resetBoard = payload => {
    this.setState({
      board: createInitialBoardState(),
      round: 1,
      gameOver: false
    });
  };

  increaseWinCount = (payload, gameStatus, player) => {
    if (player === "white") {
      gameStatus === "win"
        ? (payload.playerWon = this.state.playerWon + 1)
        : (payload.aiWon = this.state.aiWon + 1);
    }
    if (player === "black") {
      gameStatus === "win"
        ? (payload.aiWon = this.state.aiWon + 1)
        : (payload.playerWon = this.state.playerWon + 1);
    }
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
