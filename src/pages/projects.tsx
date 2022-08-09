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

import { ProjectType, REs, HT } from "../shared/projects";

const Projects = () => {
  const Info = ({ project }: { project: ProjectType }) => {
    return (
      <>
        {project.info.map((info) => {
          return (
            <li>
              <a href={info.github} target="_blank" rel="noreferrer">
                <Button role="link" outline color="info">
                  <i className="fa fa-github" aria-hidden="true" />{" "}
                  {info.linkTitle + " "}
                </Button>
              </a>
              <p>{info.tags} </p>
            </li>
          );
        })}
      </>
    );
  };

  const MyProject = ({ project }: { project: ProjectType }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
      if (animating) return;
      const nextIndex =
        activeIndex === project.carousel.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };

    const previous = () => {
      if (animating) return;
      const nextIndex =
        activeIndex === 0 ? project.carousel.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: React.SetStateAction<number>) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };

    const Slides = project.carousel.map((project) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={project.src}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
          <img
            className="Carousel-img"
            src={project.src}
            alt={project.altText}
          />
          <CarouselCaption captionText={project.caption} />
        </CarouselItem>
      );
    });

    return (
      <>
        <Row className="mt-5">
          <h5 className="Project-header">{project.title}</h5>
        </Row>
        <Row>
          <div className="col-md-5">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={project.carousel}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />

              {Slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                className="color-primary"
                //can change color??

                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </div>
          <div className="col-md-7">
            <p>{project.about}</p>
            <List type="unstyled">
              <Info project={project} />
            </List>
          </div>
        </Row>
      </>
    );
  };

  return (
    <Container>
      <Row>
        <hr />
        <h3 className="Page-header mb-3">Projects</h3>
      </Row>
      <MyProject project={REs} />
      <MyProject project={HT} />
      <h5 className="mt-5">School Projects</h5>
    </Container>
  );
};

export default Projects;
