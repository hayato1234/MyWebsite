import React from "react";
import { Container, Row } from "reactstrap";

import { Link, animateScroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <footer className="site-footer">
      <Container>
        <Row className="py-5">
          <a role="button" style={{ color: "gray" }} href="#top">
            To the top!
          </a>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
