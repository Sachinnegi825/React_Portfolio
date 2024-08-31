import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>I have worked on a wide range of projects.</Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "frontend" ? (
            <ToggleButton
              active
              value="frontend"
              onClick={() => setToggle("frontend")}
            >
              Frontend
            </ToggleButton>
          ) : (
            <ToggleButton
              value="frontend"
              onClick={() => setToggle("frontend")}
            >
              Frontend
            </ToggleButton>
          )}
          <Divider />
          {toggle === "backend" ? (
            <ToggleButton
              active
              value="backend"
              onClick={() => setToggle("backend")}
            >
              Backend
            </ToggleButton>
          ) : (
            <ToggleButton value="backend" onClick={() => setToggle("backend")}>
              Backend
            </ToggleButton>
          )}
          <Divider />
          {toggle === "mern stack" ? (
            <ToggleButton
              active
              value="mern stack"
              onClick={() => setToggle("mern stack")}
            >
              Mern Stack
            </ToggleButton>
          ) : (
            <ToggleButton
              value="mern stack"
              onClick={() => setToggle("mern stack")}
            >
              Mern Stack
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
