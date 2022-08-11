import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Col, FormGroup, Label } from "reactstrap";
import { validateContactForm } from "../utils/validateContactForm";

import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xgeqevop");
  if (state.succeeded) {
    return <p>Thank you! The message has been sent</p>;
  }

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validateContactForm}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="name" md="2">
            Your name
          </Label>
          <Col md="10">
            <Field
              name="name"
              placeholder="Type your name"
              className="form-control"
            />
            <ErrorMessage name="name">
              {(msg) => (
                <p className="text-danger">
                  <i style={{ color: "red" }}>*</i>
                  {msg}
                </p>
              )}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="email" md="2">
            Your email
          </Label>
          <Col md="10">
            <Field
              name="email"
              placeholder="example@email.com"
              className="form-control"
            />
            <ErrorMessage name="email">
              {(msg) => (
                <p className="text-danger">
                  <i style={{ color: "red" }}>*</i>
                  {msg}
                </p>
              )}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="message" md="2">
            Your Message
          </Label>
          <Col md="10">
            <Field
              name="message"
              as="textarea"
              rows="12"
              placeholder="Message..."
              className="form-control"
            />
            <ErrorMessage name="message">
              {(msg) => (
                <p className="text-danger">
                  <i style={{ color: "red" }}>*</i>
                  {msg}
                </p>
              )}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button type="submit" color="primary">
              Send
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;

//use the form api
