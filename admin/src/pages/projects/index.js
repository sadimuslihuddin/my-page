import React, { useState, useEffect } from "react";
import "./index.css";
import { Container, Card, Row, Col } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { dataProjects } from "../../utils/data";

const Projects = () => {
  const [project, setProject] = useState(1);
  const { title } = useParams();

  const data = dataProjects.find(proj => proj.title === title)

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
        <Link to="/" className="d-flex back mb-3">
          <i className="bi bi-arrow-left me-3"></i>
          <h2 className="my-auto">Back</h2>
        </Link>
        <h1 className="poppins-semibold text-glitch">
          {title[0].toUpperCase() + title.slice(1)}
        </h1>
        <p className="mb-1 date poppins-semibold">{`${data.startDate} - ${data.endDate}`}</p>
        <p>{data.description}</p>
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
