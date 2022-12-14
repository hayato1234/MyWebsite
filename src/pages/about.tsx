import React, { MutableRefObject, Ref } from "react";
import { Container, Row } from "reactstrap";

import { Element } from "react-scroll";

const About = () => {
  return (
    <Container id="about">
      <Element name="about" />
      <Row>
        <h2 className="Page-header">About myself</h2>
      </Row>
      <Row>
        <div className="col-md-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni earum
            unde laudantium, itaque minus eos quis ad hic! Sunt distinctio
            tenetur ad fuga. Debitis quibusdam quas commodi labore! Maxime,
            voluptate!
          </p>
        </div>
        <div className="col">
          <p>
            <i className="fa fa-envelope" aria-hidden="true" /> :{" "}
            <a href="mailto:">Email</a>
          </p>
          <p>
            <i className="fa fa-github" aria-hidden="true" /> :{" "}
            <a
              href="https://github.com/hayato1234/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
          </p>
          <p>
            <i className="fa fa-linkedin" aria-hidden="true" /> :{" "}
            <a href="" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default About;
