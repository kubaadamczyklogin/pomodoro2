import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Popover } from "@material-ui/core";
import { TaskCreatorForm } from "./TaskCreatorForm";

export class TaskCreatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.id = uuidv4();
    this.state = {
      anchorElement: null
    };
  }

  handleOpen = (event) => {
    event.preventDefault();
    this.setState({
      anchorElement: event.currentTarget
    });
  };

  handleClose = (event) => {
    this.setState({
      anchorElement: null
    });
  };

  render() {
    const anchorElement = this.state.anchorElement;
    const taskId = this.props.taskid || false;
    const taskTitle = this.props.taskTitle || "";
    const taskDuration = this.props.taskDuration || false;
    const isEditing = this.props.isEditing === true;

    return (
      <>
        <Button
          aria-describedby={this.id}
          variant={isEditing ? "outlined" : "contained"}
          color="primary"
          onClick={this.handleOpen}
          size={isEditing ? "small" : "normal"}
        >
          {isEditing ? "Zmień" : "Dodaj zadanie"}
        </Button>
        <Popover
          id={this.id}
          open={Boolean(anchorElement)}
          onClose={this.handleClose}
          anchorEl={anchorElement}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center"
          }}
        >
          <TaskCreatorForm
            onConfirm={this.props.onConfirm}
            taskId={taskId}
            taskTitle={taskTitle}
            taskDuration={taskDuration}
            isEditing={isEditing}
            onClose={this.handleClose}
          />
        </Popover>
      </>
    );
  }
}
