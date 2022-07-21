import React from "react";
import { Pomodoro } from "./Pomodoro";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem
} from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Container>
          <Grid container spacing={3}>
            <Pomodoro />
            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    To Do:
                  </Typography>
                  <List>
                    <ListItem>Poprawienie styli</ListItem>
                    <ListItem>
                      Przepisanie dodawania zadania do Material Ui
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </CssBaseline>
    </div>
  );
}
