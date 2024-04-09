import React, { useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
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

  return (
    <Row className="m-0">
      <Col xs="4" className="shape-1 p-0">
        <h1 className="poppins-bold text-center mt-4">Portofolio</h1>
      </Col>
      <Col xs="12" sm="8" className="p-0">
        <div faded className="navbar px-3 py-4 w-100">
          <div
            className="d-flex justify-content-around mx-auto"
            style={{ width: "80%" }}
          >
            <div className="active poppins-semibold navbar-list">
              <Link to="/">Home</Link>
            </div>
            <div className="poppins-semibold navbar-list">About</div>
            <div className="poppins-semibold navbar-list">
              <Link to="/projects">Project & Works</Link>
            </div>
            <div className="poppins-semibold navbar-list">Contact</div>
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
        {tab === "main" && <Home />}
        {tab === "table" && <Dashboard />}
        <Row className="footer p-4 mt-5 mx-0">
          <Col style={{ borderRight: "2px solid white" }}>
            <h5>Contact:</h5>
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
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-github"></i>
            <i className="bi bi-gitlab"></i>
            <i class="bi bi-whatsapp"></i>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LandingPage;
