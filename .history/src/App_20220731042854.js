import logo from "./logo.svg";
import "./App.css";

import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <header>
        <Grid container spacing={2}>
          <Grid item xs={18} md={8}>
          <h2>hey</h2>

          </Grid>
          <Grid item xs={18} md={4}>
          <h2>hey</h2>
          </Grid>
          <Grid item xs={18} md={4}>
          <h2>hey</h2>
          </Grid>
          <Grid item xs={18} md={8}>
<div class="box-1">
  <div class="btn btn-one">
    <span>HOVER ME</span>
  </div>
</div>
          </Grid>
        </Grid>
      </header>

      <section id="about-me-section"></section>

      <section id="projects-section"></section>

      <section id="contact-section"></section>
    </div>
  );
}

export default App;
