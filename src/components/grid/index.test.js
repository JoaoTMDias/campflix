import React from "react";
import { render, cleanup } from "@testing-library/react";

import Grid from "./index";

afterEach(cleanup);

const gridColumns = {
	small: 1,
	medium: 2,
	large: 3,
};

describe("<Grid />", () => {
	it("renders without error", () => {
		const component = render(
			<Grid columns={gridColumns}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</Grid>
		);

		expect(component).toMatchSnapshot();
	});
});
