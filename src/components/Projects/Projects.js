import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my featured projects that showcase my skills in full-stack development and clean architecture.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/media/pomelove.png"
              isBlog={false}
              title="PomeLove"
              description="A commercial website for a Pomeranian breeding and sales company, built following Robert C. Martin's Clean Architecture principles. Features mobile-first responsive design, dynamic design that adapts to client needs, admin panel for pet and category management, and internationalization with locale support."
              ghLink="https://github.com/Dalolito/PomeLove"
              demoLink="https://pomeloves.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/media/hirelens.png"
              isBlog={false}
              title="HireLens"
              description="A technology solution focused on optimizing the resume digitization process for Magneto recruitment platform. Features handwritten document processing via scanner, JSON conversion with standardized schema, database integration ready, and API-first approach with pay-per-use model."
              ghLink="https://github.com/camazog1/Scanner_Of_CV"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/media/medallobike.png"
              isBlog={false}
              title="MedalloBike (Academic Project)"
              description="An e-commerce platform focused on bicycle articles and cycling route recommendations, emphasizing clean code practices and maintainable architecture. Features product catalog for bicycle equipment and route recommendation system for cyclists."
              ghLink="https://github.com/Dalolito/MedalloBike"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
