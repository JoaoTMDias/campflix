import React from "react";
import { render, cleanup } from "@testing-library/react";
import Card from "./index";

afterEach(cleanup);

describe("<Card />", () => {
  it("renders without error", () => {
    const component = render(
      <Card id="example-id" title="Example title">
        <p>Test children</p>
      </Card>
    );

    expect(component).toMatchSnapshot();
  });

  it("renders a title", async () => {
    const { findByTestId } = render(
      <Card id="example-id" title="Example title">
        <p>Test children</p>
      </Card>
    );

    const title = await findByTestId("card-title");

    expect(title.textContent).toBe("Example title");
  });

  it("renders a child node", async () => {
    const { getAllByTestId } = render(
      <Card id="example-id" title="Example title">
        <p data-testid="child-node">Test children</p>
      </Card>
    );

    const childNode = await getAllByTestId("child-node");

    expect(childNode.length).toBe(1);
  });
});
