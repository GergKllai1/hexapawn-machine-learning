import React from "react";
import "./Square.css";
import Pawn from "./Pawn";

const Square = props => {
  const onClickHandler = () => {
    props.clicked(props.b.location);
  };
  const { location, color, pawn } = props.b;
  const selected =
    props.selected === props.b.location && props.availableSquares.length > 0;
  const available = props.availableSquares.includes(props.b.location);
  return (
    <div
      onClick={onClickHandler}
      name={location}
      className={`${location} ${color} square ${selected &&
        "selected"} ${available && "available"} ${available &&
        pawn &&
        "toHit"}`}
    >
      <Pawn pawn={pawn} />
    </div>
  );
};
export default Square;
