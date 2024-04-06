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
        <h1 className="poppins-bold text-glitch">Who am i?</h1>
        <p className="text-justify">
          I'm a Fullstack Developer based in Bandung, and i'm very passionate and
          dedicate to my work. I thrive on solving complex challenges and constantly seek to expand my skills and knowledge. 
          With a focus on collaboration and continuous improvement, I bring adaptability and creativity to every project I undertake. 
          My goal is to deliver innovative solutions that make a meaningful impact in the digital world.
        </p>
      </div>
      <Button className="mb-5 light-rose">
        See more
        <i className="bi bi-chevron-right ms-1"></i>
      </Button>
      <Card className="p-4 light-rose">
        <h1 className="poppins-semibold text-glitch">Education</h1>
        <p>
            A diligent and aspiring undergraduate student majoring in Mathematics hailing from the esteemed Bandung Institute of Technology (Institut Teknologi Bandung, ITB), 
            a prestigious educational institution renowned for its academic excellence and innovative research.
        </p>
      </Card>
      <div className="mt-5">
        <h1 className="poppins-semibold text-glitch">Projects & Works</h1>
        <Row>
            <Col>
            <Card className="p-2 project-card">
                <img className="project-img" src={`/image/mayar-${project}.png`} alt="projects"/>
            </Card>
            </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
