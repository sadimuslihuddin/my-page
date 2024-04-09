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
                <img height={50} src="/image/mayar-logo.webp" />
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
                <img height={30} src="/image/gamifylearn-logo.svg" />
              </div>
              <p className="fs-6">
                Sebuah sistem yang dirancang khusus sebagai One Stop Learning
                Platform bagi mahasiswa TPB ITB agar mereka dapat mengambis di
                tahun pertama.
              </p>
              <Button className="light-rose project-btn align-self-end">
                See more
                <i className="bi bi-chevron-right ms-1"></i>
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="mt-5 text-center">
        <h1 className="poppins-semibold text-glitch mb-4">Skillset</h1>
        <Row>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/html.png" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">HTML5</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/css.png" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">CSS</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/js.png" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">JavaScript</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/react.svg" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">ReactJS</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/vue.svg" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">VueJS</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/git.svg" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">Git</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/c-sharp.png" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">C#</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/tailwind.svg" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">Tailwind CSS</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/bootstrap.svg" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">Bootstrap CSS</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/graphql.png" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">Graphql</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/python.png" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">Python</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/django.png" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">Django</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/matlab.png" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">Matlab</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/mysql.svg" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">Mysql</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/rstudio.png" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">RStudio</span>
            </div>
          </Col>
          <Col xs={3} className="skill-list d-flex">
            <img className="m-2" width={40} height={40} src="/image/wordpress.png" />
            <div className="skill-text my-auto">
              <span className="poppins-semibold">Wordpress</span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
