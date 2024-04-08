import baffle from "baffle";
import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";
import "./index.css";

const Home = () => {
  //glitch effect
  useEffect(() => {
    const text = baffle(document.querySelectorAll(".text-glitch"));
    text.set({
      characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
      speed: 100,
    });
    text.start();
    text.reveal(4000);
  }, []);

  return (
    <Container className="pt-5">
      <div className="mb-5">
        <h1 className="poppins-bold text-glitch">Who am i?</h1>
        <p className="text-justify">
          I'm a Fullstack Developer based in Bandung, and i'm very passionate
          and dedicate to my work. I thrive on solving complex challenges and
          constantly seek to expand my skills and knowledge. With a focus on
          collaboration and continuous improvement, I bring adaptability and
          creativity to every project I undertake. My goal is to deliver
          innovative solutions that make a meaningful impact in the digital
          world.
        </p>
      </div>
      <Card className="p-4 light-rose">
        <h1 className="poppins-semibold text-glitch">Education</h1>
        <p>
          A diligent and aspiring undergraduate student majoring in Mathematics
          hailing from the esteemed Bandung Institute of Technology (Institut
          Teknologi Bandung, ITB), a prestigious educational institution
          renowned for its academic excellence and innovative research.
        </p>
      </Card>
      <div className="mt-5">
        <h1 className="poppins-semibold text-glitch text-center">
          Projects & Works
        </h1>
        <Row>
          <Col xs="12" sm="6" className="mt-3">
            <Card className="p-3">
              <div className="project-list">
                <img
                  height={50}
                  src="/image/mayar-logo.webp"
                />
              </div>
              <p className="fs-6">
                No-code payment, commerce and spend management platform for
                growing business.
              </p>
              <Button className="light-rose project-btn align-self-end">
                See more
                <i className="bi bi-chevron-right ms-1"></i>
              </Button>
            </Card>
          </Col>
          <Col xs="12" sm="6" className="mt-3">
            <Card className="p-3">
              <div className="project-list">
                <img
                  height={30}
                  src="/image/gamifylearn-logo.svg"
                />
              </div>
              <p className="fs-6">
              Sebuah sistem yang dirancang khusus sebagai One Stop Learning Platform bagi mahasiswa 
              TPB ITB agar mereka dapat mengambis di tahun pertama.
              </p>
              <Button className="light-rose project-btn align-self-end">
                See more
                <i className="bi bi-chevron-right ms-1"></i>
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
