import logo from "./logo.svg";
import "./App.css";

import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <header>
        <div className="section-content">
          {" "}
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <h2>hey</h2>
            </Grid>
            <Grid item xs={12} md={12}>
              <hr/>
            </Grid>
            <Grid item xs={12} md={4}>
              <div class="box-1">
                <div class="btn btn-one">
                  <span>ABOUT ME</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div class="box-1">
                <div class="btn btn-one">
                  <span>PROJECTS</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div class="box-1">
                <div class="btn btn-one">
                  <span>CONTACT</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </header>

      <section id="about-me-section"></section>

      <section id="projects-section"></section>

      <section id="contact-section"></section>
    </div>
  );
}

export default App;
