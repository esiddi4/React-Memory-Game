import React from "react";
import "./Card.css";

const Card = props => (
  <div className="col-xs-6 col-sm-4 col-md-3">
    <div className="thumbnail">
      <a onClick={() => props.onCardClick(props.id)}>
        <img alt={props.name} src={props.image} />
      </a>
    </div>
  </div>
);

export default Card;
