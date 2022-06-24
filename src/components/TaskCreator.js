import React from "react";
import { v4 as uuidv4 } from "uuid";

export class TaskCreator extends React.Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.durationInput = React.createRef();
    this.defaultDuration = 25;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onConfirm({
      id: this.props.id ? this.props.id : uuidv4(),
      title: this.titleInput.current.value,
      duration: this.durationInput.current.value
    });
    this.titleInput.current.value = "";
    this.durationInput.current.value = this.defaultDuration;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={"TaskCreator"}>
        <input
          defaultValue={this.props.title}
          ref={this.titleInput}
          type="text"
        />
        <input
          defaultValue={
            this.props.duration ? this.props.duration : this.defaultDuration
          }
          ref={this.durationInput}
          type="number"
        />
        <button type="submit">
          {this.props.isEditing ? "Zmień" : "Dodaj"}
        </button>
        {this.props.isEditing ? (
          <button onClick={() => false}>Anuluj</button>
        ) : (
          false
        )}
      </form>
    );
  }
}
