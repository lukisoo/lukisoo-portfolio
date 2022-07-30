import "./App.css";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ProfilePhoto from "./images/header/profile-photo.png";
import LinkedinLogo from "./images/header/linkedin-logo.png";
import GithubLogo from "./images/header/github-logo.png";
import ExperienceLogo from "./images/about-me/experience.png";
import AchievementsLogo from "./images/about-me/achievements.png";

import Laptop from "./images/about-me/laptop.gif";
import Tools from "./images/about-me/tools.gif";

function App() {
  return (
    <div className="App">
      <header className="full-section">
        <div className="header-content">
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
              <a href="#about-me-section">
                <div className="box-1">
                  <div className="btn btn-one">
                    <span>ABOUT ME</span>
                  </div>
                </div>
              </a>
            </Grid>
            <Grid item xs={12} md={4}>
              <a href="#projects-section">
                <div className="box-1">
                  <div className="btn btn-one">
                    <span>PROJECTS</span>
                  </div>
                </div>
              </a>
            </Grid>
            <Grid item xs={12} md={4}>
              <a href="#contact-section">
                <div className="box-1">
                  <div className="btn btn-one">
                    <span>CONTACT</span>
                  </div>
                </div>
              </a>
            </Grid>
          </Grid>
        </div>
      </header>

      <section id="about-me-section" className="full-section">
        <div className="about-me-content">
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <div className="about-me-left">
                <div className="details-content">
                <h1>About me!</h1>
                  <img
                    src={ProfilePhoto}
                    className="profile-photo"
                    alt="Profile Photo"
                  />
                  <p>Conjoint Engineering (honours) & Commerce at UoA</p>
                  <p>Software Engineerng | Finance | Accounting</p>
                  <img
                    src={ExperienceLogo}
                    className="profile-photo"
                    alt="Experience Logo"
                  />
                                    <img
                    src={AchievementsLogo}
                    className="profile-photo"
                    alt="Achievements Logo"
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className="about-me-right">
                <div className="skills-content">
                <img
                src={Laptop}
                className="profile-photo"
                alt="Laptop"
              />
                  <h2>Technologies</h2>
                  <p>React | Next.js | HTML | JS | CSS</p>
                  <p>
                    Bootstrap | Material UI | Tailwind CSS | Chakra UI | Ant
                    Design
                  </p>
                  <p>Node.js | Express.js | MySQL | MongoDB</p>
                  <p>Python | Java</p>
                  <img
                src={Tools}
                className="profile-photo"
                alt="Tools"
              />
                  <h2>Other skills / tools</h2>
                  <p>UI/UX Design | Sketching | Graphic Design | Responsive Design</p>
                  <p>Figma | Miro | Jira | Asana | Notion | LaTeX</p>
                </div>

                {/* <Grid container spacing={2}>
                  <Grid item xs={6} md={8}>
                    <p>hey</p>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <p>hey</p>
                  </Grid>
                </Grid> */}
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <section id="projects-section" className="full-section">
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}></Grid>
            <Grid item xs={6} md={4}></Grid>
            <Grid item xs={6} md={4}></Grid>
            <Grid item xs={6} md={8}></Grid>
          </Grid>
        </div>
      </section>

      <section id="contact-section" className="full-section">
        <div>
          {" "}
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}></Grid>
            <Grid item xs={6} md={4}></Grid>
            <Grid item xs={6} md={4}></Grid>
            <Grid item xs={6} md={8}></Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
}

export default App;
