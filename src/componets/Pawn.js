import React from "react";
import "./Pawn.css";
import whitePawn from "../assets/whitePawn.png";
import blackPawn from "../assets/blackPawn.png";


const Pawn = props => {
  const pawnImage = props.pawn ? (
    <img onClick={props.clicked} className="pawn" src={(props.pawn === 'white' && whitePawn) || (props.pawn === 'black' && blackPawn)} alt="pawn" />
  ) : (
    <></>
  );
  return pawnImage;
};

export default Pawn;
