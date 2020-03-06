import React from "react";
import { Router } from "react-router";
import { render, cleanup } from "@testing-library/react";
import { history } from "../../helpers";
import Header from "./index";

afterEach(cleanup);

const HeaderWithRouter = () => {
	return (
		<Router history={history}>
			<Header />
		</Router>
	);
};

describe("<ChooseProfile />", () => {
	it("renders without error", () => {
		const component = render(<HeaderWithRouter />);

		expect(component).toMatchSnapshot();
	});
});
