import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button
} from "@material-ui/core";
import { TaskCreatorButton } from "./TaskCreatorButton";

export function TaskItem(props) {
  return (
    <ListItem>
      <ListItemText
        primary={
          <>
            <Typography variant="h5" component="span">
              {props.title}
            </Typography>
            <Typography variant="subtitle2" component="span">
              {" czas: " + props.duration + "min."}
            </Typography>
          </>
        }
        secondary={
          <Box>
            <TaskCreatorButton
              onConfirm={props.onEdit}
              taskid={props.id}
              taskTitle={props.title}
              taskDuration={props.duration}
              isEditing={true}
            />
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={props.onDelete}
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              Usuń
            </Button>
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={props.onChoose}
            >
              Wybierz
            </Button>
          </Box>
        }
      />
    </ListItem>
  );
}
