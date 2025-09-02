import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ paddingTop: "0px", marginTop: "0px" }}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", marginTop: "0", marginBottom: "20px" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <b className="purple">Systems Engineering student</b> with strong skills in <b className="purple">full-stack development</b>, <b className="purple">leadership</b>, and <b className="purple">effective communication</b>. I am passionate about building clean and practical technology solutions, with a keen interest in <b className="purple">automation</b> and <b className="purple">software development</b>. I am motivated to take on new challenges that foster professional growth.
              <br />
              <br />
              I have gained valuable experience as a <b className="purple">Backend and Frontend Support Programmer</b> at URBAM-EAFIT, where I developed frontend components using Vue.js and backend services with Django REST Framework. I also created unit tests, produced technical documentation, and assisted in designing software architectures.
              <br />
              <br />
              In my academic projects, I designed and implemented an <b className="purple">automation system</b> for résumé record management for Magneto, applying software engineering practices to ensure maintainability and scalability. I'm also certified in <b className="purple">Scrum Fundamentals</b> and have completed courses in Django development and Power Apps.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="/media/profile-photo.png" className="img-fluid" alt="profile" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dalolito"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/david-lopera-londoño"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:dloperal2@eafit.edu.co"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  📧
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
