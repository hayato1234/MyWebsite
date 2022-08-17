import React, { useRef } from "react";
import Header from "./components/Header";
import About from "./pages/about";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div id="top" />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
