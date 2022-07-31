import "./App.css";

import { Link } from "react-router-dom";
import { Tooltip, Grid } from "@mui/material";
import { motion } from "framer-motion";

import ProjectsData from "./data/projectsData";

import ProfilePhoto from "./images/header/profile-photo.png";
import LinkedinLogo from "./images/header/linkedin-logo.png";
import GithubLogo from "./images/header/github-logo.png";
import ExperienceLogo from "./images/about-me/experience.png";
import AchievementsLogo from "./images/about-me/achievements.png";

import Laptop from "./images/about-me/laptop.gif";
import Tools from "./images/about-me/tools.gif";
import Projects from "./images/projects-section/projects.gif";
import Contact from "./images/contact/contact.gif";

function App() {
  return (
    <div className="App">
      <header className="full-section">
        <div className="header-image">
          <img
            src={ProfilePhoto}
            className="profile-photo"
            alt="Profile Photo"
          />
        </div>

        <div className="header-content">
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <motion.div
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                whileInView={{ y: ["-2000px", "0px", "-50px", "0px"] }}
              >
                <h2>Hey there, I'm Lucy Zhu.</h2>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={12}>
              <Tooltip title="LinkedIn">
                <a href="https://www.linkedin.com/in/lucyzhu613/">
                  <img
                    src={LinkedinLogo}
                    className="social-logo"
                    alt="Linkedin Logo"
                  />
                </a>
              </Tooltip>
              <Tooltip title="Github">
                <a href="https://github.com/lukisoo">
                  <img
                    src={GithubLogo}
                    className="social-logo"
                    alt="Github Logo"
                  />
                </a>
              </Tooltip>
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
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileInView={{ y: ["-2000px", "0px", "-50px", "-25px"] }}
        ></motion.div>
        <div className="about-me-content">
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <div className="about-me-left">
                {" "}
                <div className="details-content">
                  {" "}
                  <motion.div
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    whileInView={{ y: ["-200px", "0px", "-50px", "0px"] }}
                  >
                    <h1>About me!</h1>
                    <img
                      src={ProfilePhoto}
                      className="profile-photo"
                      alt="Profile Photo"
                    />
                    <p>Conjoint Engineering (honours) & Commerce at UoA</p>
                    <p>Software Engineering | Finance | Accounting</p>
                    <hr />
                    <p>
                      <br />
                      Currently, most of my work is in frontend or full-stack
                      development.
                      <br />
                      <br />
                    </p>
                    <hr />
                    <h3>Find out more:</h3>
                    <div className="about-me-logo-section">
                      <Tooltip title="Experience">
                        <img
                          src={ExperienceLogo}
                          className="about-me-logo"
                          alt="Experience Logo"
                        />
                      </Tooltip>
                      <Tooltip title="Achievements">
                        <img
                          src={AchievementsLogo}
                          className="about-me-logo"
                          alt="Achievements Logo"
                        />
                      </Tooltip>
                    </div>{" "}
                  </motion.div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className="about-me-right">
                <div className="skills-content">
                  <motion.div
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    whileInView={{ y: ["-200px", "0px", "-50px", "0px"] }}
                  >
                    <img src={Laptop} className="laptop-gif" alt="Laptop" />
                    <h2>Technologies</h2>
                    <p>React | Next.js | HTML | Javascript | CSS</p>
                    <p>
                      Bootstrap | Material UI | Tailwind CSS | Chakra UI | Ant
                      Design
                    </p>
                    <p>Node.js | Express.js | MySQL | MongoDB</p>
                    <p>Python | Java</p>
                    <br />{" "}
                  </motion.div>{" "}
                  <motion.div
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    whileInView={{ y: ["-200px", "0px", "-50px", "0px"] }}
                  >
                    <img src={Tools} className="tools-gif" alt="Tools" />
                    <h2>Other skills / tools</h2>
                    <p>
                      UI / UX Design | Traditional / Digital Art | Graphic
                      Design | Responsive Design
                    </p>
                    <p>
                      Figma | Miro | Jira | Asana | Notion | Procreate | GIMP |
                      LaTeX
                    </p>{" "}
                  </motion.div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <section id="projects-section" className="full-section-projects">
        <div>
          <img src={Projects} className="projects-gif" alt="Projects" />
          <h1>Projects</h1>
          <Grid container spacing={2}>
            {ProjectsData.map((Project, i) => (
              <Grid item xs={6} md={4}>
              <div className="project-box"></div>
              <img src={Project.header} alt={Project.title}/>
                <h3>{Project.title}</h3>
                <h4>{Project.affiliation}</h4>
                <div className="project-bottom-bar" style={{backgroundColor: Project.color}}></div>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>

      <section id="contact-section" className="full-section">
        <div className="contact-content">
          <img
            src={Contact}
            className="contact-gif"
            alt="Paper Plane - Contact"
          />
          <h1>Contact me!</h1>
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
