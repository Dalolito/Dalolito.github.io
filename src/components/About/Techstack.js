import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPostgresql,
  SiVuedotjs,
  SiDjango,
  SiFastapi,
  SiLaravel,
  SiTypescript,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiPython />
          <p className="tech-name">Python</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiJavascript1 />
          <p className="tech-name">JavaScript</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiTypescript />
          <p className="tech-name">TypeScript</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiReact />
          <p className="tech-name">React</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiVuedotjs />
          <p className="tech-name">Vue.js</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiDjango />
          <p className="tech-name">Django</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiFastapi />
          <p className="tech-name">FastAPI</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiLaravel />
          <p className="tech-name">Laravel</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiGit />
          <p className="tech-name">Git</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiPostgresql />
          <p className="tech-name">PostgreSQL</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <CgCPlusPlus />
          <p className="tech-name">C++</p>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
