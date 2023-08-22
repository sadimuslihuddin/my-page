import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import { landingTab } from "../../actions/landing";
import Dashboard from "../dashboard";
import Model from "./components/model";

const LandingPage = () => {
	const tab = useSelector(state => state.landingTab);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(landingTab("main"))
	},[]);

  return (
    <Container>
			{tab === 'table' && <Dashboard/>}
			<Model/>
    </Container>
  );
};

export default LandingPage;
