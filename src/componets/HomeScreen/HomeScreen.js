import React from "react";
import { Link } from "react-router-dom";

import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <h1>Hexapawn</h1>
      <div className="homescreen-button-container">
        <Link className="homescreen-button" to="/new-game">
          New Game
        </Link>
        <Link className="homescreen-button" to="/load-game">
          Load Game
        </Link>
      </div>
      <div className="text-area">
        <h3>In this game the rules are simple:</h3>
        <ul>
          <li>You move as with pawns in chess</li>
          <li>You win by eliminating all the enemys pieces or</li>
          <li>Preventing the enemy from making a legitimate move or</li>
          <li>Bringing a pawn to the enemy's front line</li>
        </ul>
        <div className='footnotes-area'>
          <h5 className='footnote'>
            This is an adaptaion of Martin Gardner's Hexapawn Game, a simple
            example of machine learning.
          </h5>
          <h5 className='footnote'>
            The AI will learn from it's mistakes and does not make a move again
            which led to a loss.
          </h5>
          <h5 className='footnote'>
            After losing 11 times the AI's game becomes close to perfect making
            it harder for the player to score a win.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
