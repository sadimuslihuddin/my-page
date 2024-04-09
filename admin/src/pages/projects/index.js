import React, { useState, useEffect } from "react";
import "./index.css";
import { Container, Card, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

const Projects = () => {
  const [project, setProject] = useState(1);
  const { title } = useParams();

  useEffect(() => {
    const interval = setInterval(() => {
      if (project !== 5) {
        setProject(project + 1);
      } else {
        setProject(1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [project]);
  return (
    <Container>
      <div className="mt-5">
        <h1 className="poppins-semibold text-glitch">
          {title[0].toUpperCase() + title.slice(1)}
        </h1>
        <Row>
          <Col>
            <Card className="p-2 project-card">
              <img
                className="project-img"
                src={`/image/${title}-${project}.png`}
                alt="projects"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Projects;
