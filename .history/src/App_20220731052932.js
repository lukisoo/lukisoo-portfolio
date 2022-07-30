import "./App.css";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ProfilePhoto from "./images/header/profile-photo.png";
import LinkedinLogo from "./images/header/linkedin-logo.png";
import GithubLogo from "./images/header/github-logo.png";

function App() {
  return (
    <div className="App">
      <header className="full-section">
        <div className="section-content">
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <img
                src={ProfilePhoto}
                className="profile-photo"
                alt="Profile Photo"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <h2>Hey there, I'm Lucy Zhu. I'm a capricorn.</h2>
            </Grid>
            <Grid item xs={12} md={12}>
              <a href="https://www.linkedin.com/in/lucyzhu613/">
                {" "}
                <img
                  src={LinkedinLogo}
                  className="social-logo"
                  alt="Linkedin Logo"
                />
              </a>
              <a href="https://github.com/lukisoo">
                <img
                  src={GithubLogo}
                  className="social-logo"
                  alt="Github Logo"
                />
              </a>
            </Grid>
            <Grid item xs={12} md={12}>
              <hr className="header-divider" />
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="box-1">
                <div className="btn btn-one">
                  <span>ABOUT ME</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="box-1">
                <div className="btn btn-one">
                  <span>PROJECTS</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="box-1">
                <div className="btn btn-one">
                  <span>CONTACT</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </header>

      <section id="about-me-section" className="full-section">

        
      </section>

      <section id="projects-section" className="full-section"></section>

      <section id="contact-section" className="full-section"></section>
    </div>
  );
}

export default App;
