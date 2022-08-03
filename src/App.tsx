import React from "react";
import Header from "./components/Header";
import About from "./pages/about";
import Projects from "./pages/projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
