import React from "react";
import { Pomodoro } from "./Pomodoro";
import { CssBaseline, Container, Grid } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Container>
          <Grid container spacing={3} style={{ marginTop: 10 }}>
            <Pomodoro />
          </Grid>
        </Container>
      </CssBaseline>
    </div>
  );
}
