import baffle from "baffle";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";
import "./index.css";

const Home = () => {
  const [project, setProject] = useState(1);

  //glitch effect
  useEffect(() => {
    const text = baffle(document.querySelectorAll(".text-glitch"));
    text.set({
        characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
        speed: 100
    });
    text.start();
    text.reveal(4000);
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      if(project !== 5){
        setProject(project + 1);
      } else {
        setProject(1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [project]);
  
  return (
    <Container className="pt-5">
      <div>
        <h1 className="poppins-bold text-glitch">Hello, Sa'di is here</h1>
        <p>
          I'm Fullstack Developer based in Bandung, and i'm very passionate and
          dedicate to my work.
        </p>
      </div>
      <Button className="mb-5 light-rose">
        See more
        <i className="bi bi-chevron-right ms-1"></i>
      </Button>
      <Card className="p-4 light-rose">
        <h1 className="poppins-semibold text-glitch">Education</h1>
        <p>
            Undergraduate Student From Bandung Institute of Technology.
        </p>
      </Card>
      <div className="mt-5">
        <h1 className="poppins-semibold text-glitch">Projects</h1>
        <Row>
            <Col>
            <Card className="p-2 project-card">
                <img className="project-img" src={`/image/mayar-${project}.png`} alt="image"/>
            </Card>
            </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
