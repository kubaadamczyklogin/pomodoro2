import React from "react";
import { LinearProgress } from "@material-ui/core";

export function ProgressBar(props) {
  return (
    <LinearProgress
      className="ProgressBar"
      variant="determinate"
      value={props.percent}
    />
  );
}
