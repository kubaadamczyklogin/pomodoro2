import React from "react";

export function Clock(props) {
  return (
    <h2 className={"Clock"}>
      Pozostało {props.minutes}:
      {(props.seconds < 10 ? "0" : "") + props.seconds}
    </h2>
  );
}
