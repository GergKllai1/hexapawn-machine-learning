import React, { useState } from "react";
import axios from "axios";

import './NewGame.css'


const NewGame = props => {
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = name + '-' + Date.now();
    axios.put(`/losing-moves/${id}.json`, {
      aiWon: 0,
      losingMoves: [],
      playerWon: 0
    });
    props.history.push(`/board/${id}`)
  };

  return (
    <form className='new-game' onSubmit={handleSubmit}>
      <label>Enter Name:</label>
      <input onChange={handleChange} required type="text" />
      <button>Start</button>
    </form>
  );
};

export default NewGame;
