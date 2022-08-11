import React from "react";
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
      <Header />
      <div
        style={{
          height: "calc(99vh - 100px)",
          overflow: "auto",
        }} /*<- this will prevent content from being hidden under header */
      >
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
