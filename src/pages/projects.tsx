import React, { useState } from "react";
import {
  Container,
  List,
  Row,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from "reactstrap";
import reactImg from "../RE-react.png";
import reactNativeImg from "../RE-iOS.png";
import bootstrapImg from "../RE-bootstrap.png";

const REs = [
  {
    src: reactImg,
    altText: "React App",
    caption: "React App",
    key: 1,
  },
  {
    src: reactNativeImg,
    altText: "React Native App",
    caption: "React Native App",
    key: 2,
  },
  {
    src: bootstrapImg,
    altText: "Bootstrap page",
    caption: "Bootstrap page",
    key: 3,
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === REs.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? REs.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: React.SetStateAction<number>) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = REs.map((REs) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={REs.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img className="Carousel-img" src={REs.src} alt={REs.altText} />
        <CarouselCaption captionText={REs.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container>
      <Row>
        <hr />
        <h3 className="Page-header">Projects</h3>
      </Row>
      <Row>
        <h5 className="Project-header">・Rebuild Electronics</h5>
      </Row>
      <Row>
        <div className="col-md-5">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={REs}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              className="color-primary"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
          <p> </p>
        </div>
        <div className="col-md-7">
          <p>
            A simulated project that was made for an E-commerce website. 2
            versions of the website were made using Bootstrap and React. A
            mobile app was made using React Native. The server side was made
            using Express.
          </p>
          <List type="unstyled">
            <li>
              <a
                href="https://github.com/hayato1234/E-commerce-bootstrap"
                target="_blank"
                rel="noreferrer"
              >
                <Button role="link" outline color="info">
                  <i className="fa fa-github" aria-hidden="true" /> Webpage with
                  Bootstrap{" "}
                </Button>
              </a>
              <p>Bootstrap, SASS, JavaScript, jQuery, CSS, HTML, </p>
            </li>
            <li>
              <a
                href="https://github.com/hayato1234/E-commerce-React"
                target="_blank"
                rel="noreferrer"
              >
                <Button role="link" outline color="info">
                  <i className="fa fa-github" aria-hidden="true" /> Webpage with
                  React
                </Button>
              </a>
              <p>React, Redux, Reactstrap, Thunk</p>
            </li>
            <li>
              <a
                href="https://github.com/hayato1234/ReactNative-Typescript-Ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                <Button role="link" outline color="info">
                  <i className="fa fa-github" aria-hidden="true" /> React Native
                  App
                </Button>
              </a>
              <p>React Native, TypeScript, Redux toolkit, Expo</p>
            </li>
            <li>
              <a
                href="https://github.com/hayato1234/Server-for-E_commerce"
                target="_blank"
                rel="noreferrer"
              >
                <Button role="link" outline color="info">
                  <i className="fa fa-github" aria-hidden="true" /> Server
                </Button>
              </a>
              <p>
                NodeJS, Express, MongoDB, Mongoose, OAuth 2.0, JWT/Passport,
                CORS, ejs{" "}
              </p>
            </li>
          </List>
        </div>

        <h5>School Projects</h5>
      </Row>
    </Container>
  );
};

export default Projects;
