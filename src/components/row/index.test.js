import React from "react";
import { render, cleanup } from "@testing-library/react";
import Row from "./index";

afterEach(cleanup);

describe("<Row />", () => {
	it("renders without error", () => {
		const component = render(<Row id="example-id" title="Example title" />);

		expect(component).toMatchSnapshot();
	});
});
