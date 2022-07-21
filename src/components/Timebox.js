import React from "react";
import { Clock } from "./Clock";
import { ProgressBar } from "./ProgressBar";
import {
  Card,
  CardContent,
  Typography,
  ButtonGroup,
  Button,
  Box
} from "@material-ui/core";
import {
  PlayArrowRounded,
  StopRounded,
  PauseRounded
} from "@material-ui/icons";

export class Timebox extends React.Component {
  constructor(props) {
    super(props);
    this.test = "test";
  }

  render() {
    const minutesLeft = Math.floor(this.props.timeLeft / (60 * 1000));
    const secondsLeft = Math.floor((this.props.timeLeft % (60 * 1000)) / 1000);
    const progressInPercent =
      ((this.props.duration - this.props.timeLeft) / this.props.duration) * 100;

    return (
      <Card className="Timebox">
        <CardContent>
          <Typography variant="h6" component="h2">
            Pomodoro Timer
          </Typography>
          <Typography variant="h4" component="h2">
            {this.props.title}
          </Typography>
          <Clock minutes={minutesLeft} seconds={secondsLeft} />
          <ProgressBar percent={progressInPercent} />
          <Box>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="contained primary button group"
            >
              <Button
                onClick={this.props.onStart}
                disabled={this.props.isRunning && !this.props.isPaused}
              >
                <PlayArrowRounded />
              </Button>
              <Button
                onClick={this.props.onPause}
                disabled={!this.props.isRunning || this.props.isPaused}
              >
                <PauseRounded />
              </Button>
              <Button
                onClick={this.props.onStop}
                disabled={!this.props.isRunning}
              >
                <StopRounded />
              </Button>
            </ButtonGroup>
          </Box>
          <Typography component="p">
            Liczba przerw: {this.props.pausesCount}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
