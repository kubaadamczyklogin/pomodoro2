import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskItem } from "./TaskItem";
import { TaskCreator } from "./TaskCreator";

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

  render() {
    const activeClass = this.props.isActive ? "" : " inactive";

    return (
      <div className={"TaskList" + activeClass}>
        <TaskCreator onConfirm={this.handleTaskAdd} />
        <ol>
          {this.state.tasks.map((task) =>
            task.editing ? (
              <li key={task.id}>
                <TaskCreator
                  id={task.id}
                  title={task.title}
                  duration={task.duration}
                  isEditing={true}
                  onConfirm={this.handleTaskEdit}
                />
              </li>
            ) : (
              <TaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                duration={task.duration}
                onDelete={() => this.handleTaskDelete(task.id)}
                onEdit={() => this.handleTaskBindCreator(task.id)}
                onChoose={() => this.props.onChoose(task)}
              />
            )
          )}
        </ol>
      </div>
    );
  }
}
