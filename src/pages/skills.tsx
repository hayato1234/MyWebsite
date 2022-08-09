import React from "react";
import { Container, Row } from "reactstrap";

const Skills = () => {
  return (
    <Container>
      <Row>
        <hr />
        <h3 className="Page-header mb-3">Skills</h3>
      </Row>
      <h5>Web</h5>
      <p>
        HTML5 CSS/SASS JavaScript Bootstrap jQuery Bootstrap React.js NPM/Yarn
        JSX Visual Studio
      </p>
      <h5>Mobile</h5>
      <p>React Native Java Swift SQLite XCode Android Studio</p>
      <h5>Backend</h5>
      <p>Express.js MongoDB/Mongoose JWT/Passport Rest API</p>
      <h5>Others</h5>
      <p>TypeScript Git Bash Microsoft Word Excel Firebase-store</p>
      <h5>Communication</h5>
      <p>Japanese - Native</p>
    </Container>
  );
};

export default Skills;
