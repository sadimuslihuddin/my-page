import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Row } from "reactstrap";
import { landingTab } from "../../actions/landing";
import Dashboard from "../dashboard";
import Model from "./components/model";
import Home from "../home";

const LandingPage = () => {
  const tab = useSelector((state) => state.landingTab);
  const dispatch = useDispatch();

  const [collapsed, setdivd] = useState(true);
  const toggleNavbar = () => setdivd(!collapsed);

  useEffect(() => {
    dispatch(landingTab("main"));
  }, []);

  return (
    <Row className="m-0">
      <Col xs="4" className="shape-1 p-0">
        <h1 className="poppins-bold text-center mt-4">Portofolio</h1>
      </Col>
      <Col xs="8" className="p-0">
        <div faded className="navbar px-3 py-4 w-100">
          <div
            className="d-flex justify-content-around mx-auto"
            style={{ width: "70%" }}
          >
            <div className="active poppins-semibold">Home</div>
            <div className="poppins-semibold">About</div>
            <div className="poppins-semibold">Project & Works</div>
            <div className="poppins-semibold">Contact</div>
          </div>
        </div>
        <img className="w-100 profile-img" src="/image/profile-1.jpg"></img>
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
        <div
          className="footer p-4 mt-5"
        >
          <h5>Contact:</h5>
          <h5 className="d-flex">
            <i className="bi bi-envelope me-2"></i>
            muslihuddinsadi@gmail.com
          </h5>
          <h5 className="d-flex">
            <i className="bi bi-phone-fill me-2"></i>
            +62 812 6162 2942
          </h5>
        </div>
      </Col>
    </Row>
  );
};

export default LandingPage;
