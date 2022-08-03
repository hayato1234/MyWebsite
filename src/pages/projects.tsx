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

const items = [
  {
    src: reactImg,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://picsum.photos/id/456/1200/400",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://picsum.photos/id/678/1200/400",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: React.SetStateAction<number>) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img className="Carousel-img" src={item.src} alt={item.altText} />
        <CarouselCaption
          className="text-danger"
          captionText={item.caption}
          captionHeader={item.caption}
        />
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
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
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
              <p>Bootstrap, JavaScript</p>
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
