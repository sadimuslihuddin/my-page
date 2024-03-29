import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Collapse,
  Container,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { landingTab } from "../../actions/landing";
import Dashboard from "../dashboard";
import Model from "./components/model";
import Home from "../home";

const LandingPage = () => {
  const tab = useSelector((state) => state.landingTab);
  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    dispatch(landingTab("main"));
  }, []);

  return (
    <div>
      <Navbar
        faded
        className="px-3"
        style={{ borderBottom: "1px solid #cccccc" }}
      >
        <NavbarBrand>Muslihuddin Sa'di Subhan</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>About</NavItem>
            <NavItem>Project</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {tab === "main" && <Home />}
      {tab === "table" && <Dashboard />}
      <Model />
      <div className="p-5" style={{ height: "200px", background: "black" }}>
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
    </div>
  );
};

export default LandingPage;
