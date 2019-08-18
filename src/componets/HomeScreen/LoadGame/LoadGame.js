import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./LoadGame.css";

const LoadGame = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios.get("/losing-moves.json").then(response => {
      response.data && setGames(Object.keys(response.data));
    });
  }, []);

  const gamesToLoad = games.map(game => {
    const name = game.split("-")[0];
    const date = new Date(parseInt(game.split("-")[1]));
    const formattedDate = date.toLocaleString();
    return (
      <Link className="load-links-container" to={`/board/${game}`}>
        <h2 className="load-link">{name}</h2>
        <h5 className="load-link">{formattedDate}</h5>
      </Link>
    );
  });
  return (
    <div className="loadgame">
      {gamesToLoad.lenght > 0 ? gamesToLoad : `No games have been added yet!`}
    </div>
  );
};

export default LoadGame;
