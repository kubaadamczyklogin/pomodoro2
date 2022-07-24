import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskItem } from "./TaskItem";
import { TaskCreatorButton } from "./TaskCreatorButton";
import { Card, CardContent, Typography, List } from "@material-ui/core";

export class TaskList extends React.Component {
  state = {
    tasks: [
      { id: uuidv4(), title: "Zadanie 1", duration: 1 },
      { id: uuidv4(), title: "Zadanie 2", duration: 3 },
      { id: uuidv4(), title: "Zadanie 3", duration: 25 }
    ]
  };

  handleTaskDelete = (idToDelete) => {
    this.setState((prevState) => {
      const tasks = prevState.tasks.filter((item) => {
        return idToDelete !== item.id;
      });
      return {
        tasks
      };
    });
  };

  handleTaskBindCreator = (idToEdit) => {
    this.setState((prevState) => {
      const tasks = prevState.tasks.map((item) => {
        item.editing = item.id === idToEdit;
        return item;
      });
      return {
        tasks
      };
    });
  };

  handleTaskAdd = (taskToAdd) => {
    this.handleTaskBindCreator(false);
    this.setState((prevState) => {
      const tasks = [...prevState.tasks, taskToAdd];
      return {
        tasks
      };
    });
  };

  handleTaskEdit = (changedTask) => {
    this.setState((prevState) => {
      const tasks = prevState.tasks.map((item) => {
        return changedTask.id === item.id ? changedTask : item;
      });
      return {
        tasks
      };
    });
  };

  inactiveStyles = { opacity: 0.5, pointerEvents: "none" };

  render() {
    return (
      <Card
        className={"TaskList"}
        style={this.props.isActive ? {} : this.inactiveStyles}
      >
        <CardContent>
          <Typography variant="h4" component="h2" style={{ marginBottom: 10 }}>
            Lista zadań
          </Typography>
          <TaskCreatorButton onConfirm={this.handleTaskAdd} />
          <List>
            {this.state.tasks.map(
              (task) => (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  duration={task.duration}
                  onDelete={() => this.handleTaskDelete(task.id)}
                  onChoose={() => this.props.onChoose(task)}
                  onEdit={this.handleTaskEdit}
                />
              )
              // )
            )}
          </List>
        </CardContent>
      </Card>
    );
  }
}
