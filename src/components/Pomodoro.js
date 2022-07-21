import React from "react";
import { Timebox } from "./Timebox";
import { TaskList } from "./TaskList";
import hour from "./../hour.mp3";
import { Grid } from "@material-ui/core";

export class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTaskTitle: "Niewybrano zadania",
      currentTaskDuration: 25 * 60 * 1000,
      isRunning: false,
      isPaused: false,
      isFinish: false,
      pausesCount: 0,
      timeLeft: 25 * 60 * 1000,
      startTime: 0,
      finishTime: 0
    };
    this.backgroundTimer = new Audio(hour);
  }

  handleOnChoose = (task) => {
    const duration = task.duration * 60 * 1000;

    this.setState({
      currentTaskTitle: task.title,
      currentTaskDuration: duration,
      timeLeft: duration
    });
  };

  handleStart = () => {
    const currentTime = Date.now();

    if (!this.state.isPaused) {
      this.setState({
        pausesCount: 0,
        timeLeft: this.state.currentTaskDuration,
        isRunning: true,
        startTime: currentTime,
        finishTime: currentTime + this.state.currentTaskDuration
      });
    } else {
      this.setState({
        finishTime: currentTime + this.state.timeLeft,
        isPaused: false
      });
    }

    this.startTimer();
  };

  handleStop = () => {
    this.setState({
      isRunning: false,
      isPaused: false,
      pausesCount: 0,
      timeLeft: this.state.currentTaskDuration
    });
    this.stopTimer();
  };

  startTimer() {
    this.backgroundTimer.currentTime = 3600 - this.state.timeLeft / 1000;
    this.backgroundTimer.play();

    this.intervalId = window.setInterval(() => {
      const currentTime = Date.now();
      const newTimeLeft = this.state.finishTime - currentTime;
      if (newTimeLeft <= 0) {
        this.setState({
          isRunning: false,
          isPaused: false,
          isFinish: true,
          timeLeft: 0
        });
        this.stopTimer();
      } else {
        this.setState({
          timeLeft: newTimeLeft
        });
      }
    }, 100);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.backgroundTimer.pause();
    this.backgroundTimer.currentTime = 0;
  }

  handlePause = () => {
    this.setState((prevState) => {
      return {
        isPaused: true,
        pausesCount: prevState.pausesCount + 1
      };
    });
    this.stopTimer();
  };

  render() {
    return (
      <>
        <Grid item xs={12} sm={6} lg={4}>
          <Timebox
            title={this.state.currentTaskTitle}
            duration={this.state.currentTaskDuration}
            timeLeft={this.state.timeLeft}
            isRunning={this.state.isRunning}
            isPaused={this.state.isPaused}
            onStart={this.handleStart}
            onStop={this.handleStop}
            onPause={this.handlePause}
            pausesCount={this.state.pausesCount}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TaskList
            onChoose={this.handleOnChoose}
            isActive={!this.state.isRunning}
          />
        </Grid>
      </>
    );
  }
}
