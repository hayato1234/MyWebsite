import React, { useState } from "react";
import { Container, List, Row, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination } from "swiper";

import {
  ProjectType,
  REs,
  HT,
  NUCAMPSITE,
  MORITWITTER,
  NOTIFLASH,
  NUCAMPSERVER,
} from "../shared/projects";

import { Element } from "react-scroll";

const Info = ({ project }: { project: ProjectType }) => {
  return (
    <>
      {project.info.map((info) => {
        return (
          <li key={info.key}>
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
  const Slides = project.carousel.map((project) => {
    return (
      <SwiperSlide key={project.key}>
        <img className="Carousel-img" src={project.src} alt={project.altText} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Row className="mt-5">
        <h5 className="Project-header">{project.title}</h5>
      </Row>
      <Row>
        <div className="col-md-5">
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {Slides}
          </Swiper>
        </div>
        <div className="col-md-7">
          <p>
            <strong>Description:</strong> {project.about}
          </p>
          <List type="unstyled">
            <Info project={project} />
          </List>
        </div>
      </Row>
    </>
  );
};

const Projects = () => {
  const [schoolOpen, toggleSchoolOpen] = useState(false);
  const [oldOpen, toggleOldOpen] = useState(false);
  return (
    <Container>
      <Element name="projects" />
      <Row>
        <hr />
        <h2 className="Page-header mb-3">Projects</h2>
      </Row>
      <MyProject project={REs} />
      <MyProject project={HT} />

      {oldOpen ? (
        <>
          <h5
            className="mt-5"
            style={{ color: "grey" }}
            onClick={() => toggleOldOpen(!oldOpen)}
          >
            Old Projects <i className="fa fa-caret-up" aria-hidden="true" />
          </h5>
          <div style={{ border: "2px solid gray" }}>
            <MyProject project={MORITWITTER} />
            <MyProject project={NOTIFLASH} />
          </div>
        </>
      ) : (
        <h5 className="mt-5" onClick={() => toggleOldOpen(!oldOpen)}>
          Old Projects <i className="fa fa-caret-down" aria-hidden="true" />
        </h5>
      )}

      {schoolOpen ? (
        <>
          <h5
            className="mt-5"
            style={{ color: "grey" }}
            onClick={() => toggleSchoolOpen(!schoolOpen)}
          >
            School Projects <i className="fa fa-caret-up" aria-hidden="true" />
          </h5>
          <div className="mb-5" style={{ border: "2px solid gray" }}>
            <MyProject project={NUCAMPSITE} />
            <MyProject project={NUCAMPSERVER} />
          </div>
        </>
      ) : (
        <h5 className="my-5" onClick={() => toggleSchoolOpen(!schoolOpen)}>
          School Projects <i className="fa fa-caret-down" aria-hidden="true" />
        </h5>
      )}
    </Container>
  );
};

export default Projects;
