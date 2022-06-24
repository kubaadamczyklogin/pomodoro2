import React from "react";

export function ProgressBar({ className = "", percent = 33 }) {
  return (
    <div className={"ProgressBar " + className}>
      <div style={{ width: `${percent}%` }}></div>
    </div>
  );
}
