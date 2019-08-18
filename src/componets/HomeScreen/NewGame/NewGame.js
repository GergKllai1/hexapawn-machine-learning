import React, { useState } from "react";
import axios from "axios";

const NewGame = () => {
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = name + '-' + Math.floor(Math.random() * 9999);
    axios.put(`/losing-moves/${id}.json`, {
      aiWon: 0,
      losingMoves: [],
      playerWon: 0
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Name:</label>
      <input onChange={handleChange} required type="text" />
      <button>Start</button>
    </form>
  );
};

export default NewGame;
