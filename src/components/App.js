import React from "react";
import { Pomodoro } from "./Pomodoro";

export default function App() {
  return (
    <div className="App">
      <Pomodoro />
      <h3>To Do:</h3>
      <ol>
        <li>stylowanko</li>
        <li>zmiana kolejności zadań</li>
      </ol>
    </div>
  );
}
