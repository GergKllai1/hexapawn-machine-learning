import React from "react";
import "./Pawn.css";

const Pawn = props => {
  const pawnImage = props.pawn ? (
    <img onClick={props.clicked} className="pawn" src={props.pawn} alt="pawn" />
  ) : (
    <></>
  );
  return pawnImage;
};

export default Pawn;
