import React from "react";
import "./Pawn.css";

const Pawn = props => {
  const pawnImage = props.pawn ? (
    <img className="pawn" src={props.pawn} alt="pawn" />
  ) : (
    <></>
  );
  return pawnImage;
};

export default Pawn;
