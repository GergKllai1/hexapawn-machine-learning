import React, { Component } from "react";
import "./Board.css";
import Square from "../../componets/Board/Square/Square";
import { playerMove, aiMove } from "../../helpers/moveHelper";
import createBoardArray from "../../helpers/boardArrayHelper";
import { createInitialBoardState } from "../../helpers/boardStateHelper";
import isTheGameEnded from "../../helpers/gameStatusHelper";
import axios from "axios";

export class Board extends Component {
  state = {
    board: createInitialBoardState(),
    selected: null,
    availableSquares: [],
    round: 1,
    playerWon: 0,
    aiWon: 0,
    gameOver: false,
    winner: "",
    gameHistory: [],
    losingMoves: [],
    disableMove: false,
    id: this.props.match.url.split("/").pop()
  };

  componentDidMount() {
    axios
      .get(`/losing-moves/${this.state.id}.json`)
      .then(response => {
        const lm = response.data.losingMoves ? response.data.losingMoves : [];
        this.setState({
          losingMoves: lm,
          aiWon: response.data.aiWon,
          playerWon: response.data.playerWon
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleFieldSelect = location => {
    const payload = playerMove(location, this.state);
    let winner = "";
    if (payload.round % 2 === 0) {
      winner = isTheGameEnded(payload.board, "black", "white");
      if (winner !== "unresolved") {
        this.increaseWinCount(payload, winner);
        this.gameOver(winner, payload);
      } else {
        const ai = aiMove(payload, this.state.losingMoves);
        const pieceToMove = Object.keys(ai)[0];
        const squareToMove = Object.values(ai)[0];
        payload.board[pieceToMove].pawn = null;
        payload.board[squareToMove].pawn = "black";
        payload.gameHistory.push(pieceToMove + squareToMove);
        payload.round++;
        winner = isTheGameEnded(payload.board, "white", "black");
        if (winner !== "unresolved") {
          this.increaseWinCount(payload, winner);
          this.gameOver(winner, payload);
        }
      }
    }
    this.setState(payload);
  };

  gameOver = (winner, payload) => {
    let updatedLosingMoves = [...this.state.losingMoves];
    if (winner === "white") {
      updatedLosingMoves.push(payload.gameHistory);
      axios.put(`/losing-moves/${this.state.id}.json`, {
        losingMoves: updatedLosingMoves,
        aiWon: payload.aiWon,
        playerWon: payload.playerWon
      });
    }

    const formattedWinner = winner[0].toUpperCase() + winner.slice(1);
    this.setState({
      gameOver: true,
      winner: formattedWinner,
      losingMoves: updatedLosingMoves,
      disableMove: true
    });
  };

  resetBoard = () => {
    this.setState({
      board: createInitialBoardState(),
      round: 1,
      gameOver: false,
      winner: "",
      gameHistory: [],
      disableMove: false
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
          disabled={this.state.disableMove}
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
        <div className="board">{boardWithPieces}</div>
        <div>
          {this.state.gameOver ? (
            <div className="game-over-container">
              <h3 className="game-over">Game Over</h3>
              <p className="game-over"> {this.state.winner} won!</p>
              <button className="game-over-button" onClick={this.resetBoard}>
                New Game
              </button>
            </div>
          ) : (
            <>
              <div className="game-counter">
                <p>Games won by player:</p>
                <p>{this.state.playerWon}</p>
              </div>
              <div className="game-counter">
                <p>Games won by AI:</p>
                <p>{this.state.aiWon}</p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Board;
