import React from "react";
import "./Square.css";
import Pawn from "./Pawn";

const Square = props => {
  const onClickHandler = () => {
    props.clicked(props.b.location)
  }
  return (
    <div
      onClick={onClickHandler}
      name={props.b.location}
      key={props.b.location}
      className={`${props.b.location} ${props.b.color} square ${props.b
        .selected && "selected"} ${props.b.avaliable && "avaliable"} ${props.b
        .avaliable &&
        props.b.pawn &&
        "toHit"}`}
    >
      <Pawn
        clicked={onClickHandler}
        pawn={props.b.pawn}
      />
    </div>
  );
};
export default Square;
