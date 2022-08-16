import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Container id="contact">
      <Element name="contact" />
      <Row className="row-content">
        <hr />
        <h2 className="Page-header mb-3">Get In Touch</h2>
      </Row>
      <Row className="row-content">
        <Col>
          <a
            href="https://twitter.com/MoritaniSteve"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="m-3" role="link" outline color="info">
              <i className="fa fa-twitter" aria-hidden="true" /> Twitter
            </Button>
          </a>
          <a
            href="https://expo.dev/@steve.moritani?tab=snacks"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="m-3" role="link" outline color="info">
              Expo Snacks
            </Button>
          </a>
          <a
            href="https://codepen.io/SteveMoritani/pens/public"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="m-3" role="link" outline color="info">
              <i className="fa fa-codepen" aria-hidden="true" /> CodePen
            </Button>
          </a>
          <a
            href="https://github.com/hayato1234/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="m-3" role="link" outline color="info">
              <i className="fa fa-github" aria-hidden="true" /> Github
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/steve-moritani/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="m-3" role="link" outline color="info">
              <i className="fa fa-linkedin" aria-hidden="true" /> Linkedin
            </Button>
          </a>
        </Col>
      </Row>
      <Row className="row-content mt-5">
        <Col xs="12">
          <h5>Contact Form</h5>
          <hr />
        </Col>
        <Col md="10">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
