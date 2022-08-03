import React from "react";
import { Container, Row } from "reactstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <h3 className="Page-header">About myself</h3>
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
          <p>Email: </p>
          <p>
            Github:{" "}
            <a
              href="https://github.com/hayato1234/"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/hayato1234/
            </a>{" "}
          </p>
          <p>CodePen: https://codepen.io/SteveMoritani/pens/public</p>
          <p>Expo Snacks: https://expo.dev/@steve.moritani?tab=snacks </p>
          <p>Twitter: </p>
        </div>
      </Row>
    </Container>
  );
};

export default About;
