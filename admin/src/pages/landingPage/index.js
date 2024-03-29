import React, { useEffect, useState } from "react";
import './index.css'
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Collapse, Container, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { landingTab } from "../../actions/landing";
import Dashboard from "../dashboard";
import Model from "./components/model";
import Home from "../home";

const LandingPage = () => {
	const tab = useSelector(state => state.landingTab);
	const dispatch = useDispatch();

	const [collapsed, setCollapsed] = useState(true);
	const toggleNavbar = () => setCollapsed(!collapsed);
	
	useEffect(() => {
		dispatch(landingTab("main"))
	},[]);

  return (
	<div>
		<Navbar faded className="px-3" style={{borderBottom: "1px solid #cccccc"}}>
			<NavbarBrand>SadiMuslihuddin</NavbarBrand>
			<NavbarToggler onClick={toggleNavbar} />
			<Collapse isOpen={!collapsed} navbar>
				<Nav navbar>
					<NavItem>About</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
		{ tab === "main"  && <Home/>}
		{ tab === "table" && <Dashboard/>}
		<Model/>
	</div>
  );
};

export default LandingPage;
