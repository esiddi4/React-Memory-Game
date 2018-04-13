import React from "react";

export const Row = props => (
    <div className={props.message.indexOf(".") !== -1 ? "row animated shake" : "row"}>
      {props.children}
    </div>
  );