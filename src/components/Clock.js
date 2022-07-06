import React from "react";
import { Typography } from "@material-ui/core";

export function Clock(props) {
  return (
    <Typography className={"Clock"} variant="h6" component="h2">
      Pozostało {props.minutes}:
      {(props.seconds < 10 ? "0" : "") + props.seconds}
    </Typography>
  );
}
