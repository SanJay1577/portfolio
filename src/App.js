import React from "react";
import About from "./About/about";
import "./App.css";
import Contact from "./Contact/contact";
import Home from "./Home/home";
import NavBar from "./NavBar";
import Projects from "./Projects/projects";
import Skills from "./Skills/skills";

function App() {
  return (
    <div className="App">
      <NavBar />

      <section id="Home">
        <Home />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

