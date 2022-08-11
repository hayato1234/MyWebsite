import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Container id="contact">
      <Row className="row-content">
        <hr />
        <h2 className="Page-header mb-3">Get In Touch</h2>
      </Row>
      <Row className="row-content">
        <Col md={5}>
          <a
            href="https://expo.dev/@steve.moritani?tab=snacks"
            target="_blank"
            rel="noreferrer"
          >
            <Button role="link" outline color="info">
              Expo Snacks
            </Button>
          </a>
        </Col>
        <Col md={2}>
          <a
            href="https://codepen.io/SteveMoritani/pens/public"
            target="_blank"
            rel="noreferrer"
          >
            <Button role="link" outline color="info">
              CodePen
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
