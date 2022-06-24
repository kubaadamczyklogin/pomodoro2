import React from "react";
import { Clock } from "./Clock";
import { ProgressBar } from "./ProgressBar";

export class Timebox extends React.Component {
  constructor(props) {
    super(props);
    this.test = "test";
  }

  render() {
    const minutesLeft = Math.floor(this.props.timeLeft / (60 * 1000));
    const secondsLeft = Math.floor((this.props.timeLeft % (60 * 1000)) / 1000);
    const progressInPercent =
      ((this.props.duration - this.props.timeLeft) / this.props.duration) *
      100.0;

    return (
      <div className="Timebox">
        <h1>{this.props.title}</h1>
        <Clock minutes={minutesLeft} seconds={secondsLeft} />
        <ProgressBar percent={progressInPercent} />
        <button onClick={this.props.onStart} disabled={this.props.isRunning}>
          Start
        </button>
        <button onClick={this.props.onStop} disabled={!this.props.isRunning}>
          Stop
        </button>
        <button onClick={this.props.onPause} disabled={!this.props.isRunning}>
          {this.props.isPaused ? "Wznów" : "Pauzuj"}
        </button>
        Liczba przerw: {this.props.pausesCount}
      </div>
    );
  }
}
