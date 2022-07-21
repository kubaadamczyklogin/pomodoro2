import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  Box,
  ButtonGroup,
  Button
} from "@material-ui/core";

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
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={props.onEdit}
            >
              Zmień
            </Button>
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={props.onDelete}
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
