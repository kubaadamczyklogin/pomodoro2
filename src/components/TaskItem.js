import React from "react";

export function TaskItem(props) {
  return (
    <li>
      <span>{props.title}</span>,<span> czas: {props.duration} min.</span>
      <button onClick={props.onEdit}>Zmień</button>
      <button onClick={props.onDelete}>Usuń</button>
      <button onClick={props.onChoose}>Wybierz</button>
    </li>
  );
}
