import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Card, CardContent, Button, TextField } from "@material-ui/core";

export class TaskCreatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.durationInput = React.createRef();
    this.defaultDuration = 25;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onConfirm({
      id: this.props.taskId ? this.props.taskId : uuidv4(),
      title: this.titleInput.current.value,
      duration: this.durationInput.current.value
    });
    this.titleInput.current.value = "";
    this.durationInput.current.value = this.defaultDuration;
    this.props.onClose();
  };

  render() {
    return (
      <Card>
        <CardContent>
          <form onSubmit={this.handleSubmit} className={"TaskCreator"}>
            <TextField
              defaultValue={this.props.taskTitle}
              inputRef={this.titleInput}
              type="text"
              label="Zadanie"
              variant="outlined"
              style={{ marginTop: 20, marginBottom: 20 }}
            />
            <br />
            <TextField
              defaultValue={
                this.props.taskDuration
                  ? this.props.taskDuration
                  : this.defaultDuration
              }
              inputRef={this.durationInput}
              type="number"
              label="Czas"
              variant="outlined"
              style={{ marginBottom: 20 }}
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginRight: 10 }}
            >
              {this.props.isEditing ? "Zmień" : "Dodaj"}
            </Button>
            <Button
              onClick={this.props.onClose}
              type="submit"
              variant="outlined"
              color="primary"
            >
              Anuluj
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}
