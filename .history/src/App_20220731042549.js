import logo from './logo.svg';
import './App.css';

import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">

    <header>

    <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid>
  <Grid item xs={6} md={4}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item xs={6} md={4}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid>
</Grid>

    </header>

    <section id="about-me-section">

    </section>

    <section id="projects-section">

    </section>

    <section id="contact-section">

    </section>

    </div>
  );
}

export default App;
