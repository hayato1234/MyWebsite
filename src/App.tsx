import React from "react";
import Header from "./components/Header";
import About from "./pages/about";
import Projects from "./pages/projects";
import "./App.css";
import Skills from "./pages/skills";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
