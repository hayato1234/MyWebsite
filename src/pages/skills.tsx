import React from "react";
import { Col, Container, Row } from "reactstrap";
import { skillCategories } from "../shared/skills";

import { Element } from "react-scroll";

const Skills = () => {
  const skillList = skillCategories.map((skill) => {
    return (
      <React.Fragment key={skill.key}>
        <h5>{skill.category}</h5>
        <Col
          style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap" }}
        >
          {skill.list.map((skill, i) => {
            return (
              <span
                key={i}
                style={{
                  background: "#534bae",
                  marginRight: "10px",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {skill}
              </span>
            );
          })}
        </Col>
      </React.Fragment>
    );
  });
  return (
    <Container id="skills">
      <Element name="skills" />
      <Row>
        <hr />
        <h2 className="Page-header mb-3">Skills</h2>
      </Row>
      <Row></Row>
      {skillList}
    </Container>
  );
};

export default Skills;
