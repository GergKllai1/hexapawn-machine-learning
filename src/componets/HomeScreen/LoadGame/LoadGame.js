import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const LoadGame = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios.get("/losing-moves.json").then(response => {
      setGames(Object.keys(response.data));
    });
  }, []);

  const gamesToLoad = games.map(game => {
    debugger;
    const name = game.split("-")[0];
    const date = new Date(parseInt(game.split("-")[1]));
    const formattedDate = date.toLocaleString();
    return (
      <Link to={`/board/${game}`}>
        <h4>{name}</h4>
        <h5>{formattedDate}</h5>
      </Link>
    );
  });
  return <div>{gamesToLoad}</div>;
};

export default LoadGame;
