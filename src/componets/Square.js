import React from "react";
import "./Square.css";
import Pawn from "./Pawn";

const Square = props => {
  const onClickHandler = () => {
    props.clicked(props.b.location, props.b.pawnName);
  };
  const { location, color, pawn } = props.b;
  const selected = props.selected === props.b.location;
  const avaliable = props.avaliableSquares.includes(props.b.location);
  return (
    <div
      onClick={onClickHandler}
      name={location}
      className={`${location} ${color} square ${selected &&
        "selected"} ${avaliable && "avaliable"} ${avaliable &&
        pawn &&
        "toHit"}`}
    >
      <Pawn clicked={onClickHandler} pawn={pawn} />
    </div>
  );
};
export default Square;
