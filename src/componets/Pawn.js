import React from "react";
import "./Pawn.css";

const Pawn = props => {
  return <img className="pawn" src={props.pawn} alt="pawn" />;
};

export default Pawn;
