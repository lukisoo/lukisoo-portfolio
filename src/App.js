import "./App.css";

import { Link } from "react-router-dom";
import { Tooltip, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRecoilState, RecoilRoot } from "recoil";

import ProjectPopUp from "./components/project-pop-up.js";
import AchievementsPopUp from "./components/achievements-pop-up.js";

import ProjectsData from "./data/projectsData";
import AchievementsData from "./data/achievementsData";

import ProfilePhoto from "./images/header/profile-photo.png";
import LinkedinLogo from "./images/header/linkedin-logo.png";
import GithubLogo from "./images/header/github-logo.png";
import ExperienceLogo from "./images/about-me/experience.png";
import AchievementsLogo from "./images/about-me/achievements.png";
import LinkedinLogo2 from "./images/contact/linkedin-logo.png";
import GithubLogo2 from "./images/contact/github-logo.png";
import EmailLogo from "./images/contact/email-logo.png";

import Laptop from "./images/about-me/laptop.gif";
import Tools from "./images/about-me/tools.gif";
import Projects from "./images/projects-section/projects.gif";
import Contact from "./images/contact/contact.gif";

import { currentProjectState } from "./atoms/currentProjectState";

function App() {
  const [visibilityProjectPopUp, setVisibilityProjectPopUp] = useState(false);
  const [visibilityAchievementPopUp, setVisibilityAchievementPopUp] =
    useState(false);

  const [currentProject, setCurrentProject] =
    useRecoilState(currentProjectState);

  const closeProjectPopUpHandler = (e) => {
    setVisibilityProjectPopUp(e);
  };

  const closeAchievementsPopUpHandler = (e) => {
    setVisibilityAchievementPopUp(e);
  };

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
                <p>Please excuse the messy site, it's still in progress! Last updated: July 2022</p>
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
        <div className="about-me-content">
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <div className="about-me-left">
                <div className="details-content">
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
                    <p>
                      Conjoint Bachelor of Engineering (honours) and Commerce at
                      UoA
                    </p>
                    <p>
                      <b>Software Engineering | Finance | Accounting</b>
                    </p>
                    <hr />
                    <br />
                    <p>
                      Most of my work has been in working on frontend or
                      full-stack development.
                    </p>
                    <p>
                      I have a broad range of interests, and am seeking to
                      further develop my skills in technology and/or consulting.
                    </p>
                    <br />
                    <hr />
                    {/* <h3>Find out more:</h3> */}
                    <div className="about-me-logo-section">
                      {/* <Tooltip title="Experience">
                        <img
                          src={ExperienceLogo}
                          className="about-me-logo"
                          alt="Experience Logo"
                        />
                      </Tooltip> */}
                      {/* <Tooltip title="Achievements">
                        <img
                          src={AchievementsLogo}
                          className="about-me-logo"
                          alt="Achievements Logo"
                          onClick={(e) =>
                            setVisibilityAchievementPopUp(
                              !visibilityAchievementPopUp
                            )
                          }
                        />
                      </Tooltip> */}
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
                      UI / UX / Graphic / Responsive Design | Traditional /
                      Digital Art
                    </p>
                    <p>
                      Figma | Miro | Canva | Jira | Asana | Notion | Procreate |
                      GIMP | LaTeX
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
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileInView={{ y: ["-200px", "0px", "-50px", "0px"] }}
          >
            <img src={Projects} className="projects-gif" alt="Projects" />
            <h1>Projects</h1>{" "}
          </motion.div>

          <div className="all-projects">
            <Grid container rowSpacing={6} columnSpacing={0}>
              {[...ProjectsData].reverse().map((Project, i) => (
                <Grid item xs={12} md={4}>
                  <motion.div
                    // drag
                    // dragConstraints = {{top: -50, left: -50, right: 50, bottom: 50,}}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    whileInView={{ y: ["-200px", "0px", "-50px", "0px"] }}
                  >
                    <div
                      className="project-box"
                      onClick={() => (
                        setVisibilityProjectPopUp(!visibilityProjectPopUp),
                        setCurrentProject(Project.id)
                      )}
                    >
                      <img
                        draggable="false"
                        src={Project.header}
                        className="project-header-image"
                        alt={Project.title}
                      />
                      <div className="project-text">
                        <h3>{Project.title}</h3>
                        <p>{Project.affiliation}</p>
                      </div>

                      <div
                        className="project-bottom-bar"
                        style={{ backgroundColor: Project.color }}
                      ></div>
                    </div>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </section>

      <section id="contact-section" className="full-section">
        <div className="contact-content">
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileInView={{ y: ["-2000px", "0px", "-50px", "-25px"] }}
          >
            <img src={Contact} className="contact-gif" alt="Contact" />
            <br />
            <h1>Contact me!</h1>
            <p>I'm happy to have a chat about anything!</p>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com/in/lucyzhu613/">
                    <img
                      src={LinkedinLogo2}
                      className="social-logo"
                      alt="Linkedin Logo"
                    />
                  </a>
                </Tooltip>

                <Tooltip title="Github">
                  <a href="https://github.com/lukisoo">
                    <img
                      src={GithubLogo2}
                      className="social-logo"
                      alt="Github Logo"
                    />
                  </a>
                </Tooltip>

                <Tooltip title="Email: lzlucyz@gmail.com">
                  <a href="mailto: lzlucyz@gmail.com">
                    <img
                      src={EmailLogo}
                      className="social-logo"
                      alt="Email Logo"
                    />
                  </a>
                </Tooltip>
              </Grid>
            </Grid>
          </motion.div>
        </div>
      </section>

      <ProjectPopUp
        onClose={closeProjectPopUpHandler}
        show={visibilityProjectPopUp}
        title={ProjectsData[currentProject].title}
      >
        <div>
          <div className="pick-task-content">
            <img
              src={ProjectsData[currentProject].header}
              className="project-header-image-popup"
              alt={ProjectsData[currentProject].title}
            ></img>
            <h3>{ProjectsData[currentProject].affiliation}</h3>
            <p>{ProjectsData[currentProject].description}</p>
          </div>
        </div>
      </ProjectPopUp>

      <AchievementsPopUp
        onClose={closeAchievementsPopUpHandler}
        show={visibilityAchievementPopUp}
        title="Achievements (2021 - now)"
      >
        <div>
          <div className="pick-task-content">
            {[...AchievementsData].reverse().map((Achievement, i) => (
              <div>
                <h1>{Achievement.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </AchievementsPopUp>
    </div>
  );
}

export default App;
