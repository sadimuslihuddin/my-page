import React, { useEffect, useRef } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import { landingTab } from "../../actions/landing";
import Dashboard from "../dashboard";
//import Model from "./components/model";
import Home from "../home";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const tab = useSelector((state) => state.landingTab);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(landingTab("main"));
  }, []);

  const about = useRef();
  const projects = useRef();
  const contact = useRef();
  const handleScroll = (value) => {
    value.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Row className="m-0">
      <Col xs="4" className="shape-1 p-0">
        <h1 className="poppins-bold text-center mt-4">Portofolio</h1>
      </Col>
      <Col xs="12" sm="8" className="p-0">
        <div faded className="navbar px-3 py-2 py-sm-4 w-100">
          <div className="d-flex justify-content-around mx-auto w-100">
            <div className="navbar-list">
              <Link to="/"><Button color="link">Home</Button></Link>
            </div>
            <div className="poppins-semibold navbar-list">
              <Button color="link" onClick={() => handleScroll(about)}>
                About
              </Button>
            </div>
            <div className="poppins-semibold navbar-list">
              <Button color="link" onClick={() => handleScroll(projects)}>
                Project & Works
              </Button>
            </div>
            <div className="poppins-semibold navbar-list">
              <Button color="link" onClick={() => handleScroll(contact)}>
                Contact
              </Button>
            </div>
          </div>
        </div>
        <img
          className="w-100 profile-img"
          src="/image/profile-1.jpg"
          alt="profile"
        ></img>
        <div className="cover-profile"></div>
      </Col>
      <Col xs="12">
        <div className="name-profile">
          <h1 className="poppins-bold text-glitch">Hello,</h1>
          <h2 className="poppins-bold text-glitch">
            Muslihuddin Sa'di is here.
          </h2>
          <div className="light-rose mt-3 role-profile">
            <h4 className="poppins-bold d-inline px-3">I'M</h4>
            <div>
              <h4 className="poppins-bold px-3 mb-0">A WEB DEVELOPER</h4>
              <h4 className="poppins-bold px-3 mb-0">A MATH MODELLER</h4>
              <h4 className="poppins-bold px-3 mb-0">AN ANDROID DEVELOPER</h4>
            </div>
          </div>
        </div>
      </Col>
      <Col xs="12" className="p-0">
        <Home about={about} projects={projects} />
        {/* {tab === "table" && <Dashboard />} */}
        <Row className="footer p-4 mt-5 mx-0">
          <Col style={{ borderRight: "2px solid white" }}>
            <h5 ref={contact}>Contact:</h5>
            <h5 className="d-flex">
              <i className="bi bi-envelope me-2"></i>
              muslihuddinsadi@gmail.com
            </h5>
            <h5 className="d-flex">
              <i className="bi bi-phone-fill me-2"></i>
              +62 812 6162 2942
            </h5>
          </Col>
          <Col className="icon w-100 d-flex justify-content-around">
            <a href="https://id.linkedin.com/in/muslihuddinsadisubhan">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/sadimuslihuddin">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://gitlab.com/sadimuslihuddin">
              <i className="bi bi-gitlab"></i>
            </a>
            <a href="https://wa.me/+6281261622942">
              <i class="bi bi-whatsapp"></i>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LandingPage;
