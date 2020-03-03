import React from "react";
import { Router } from "react-router";
import { history } from "../../helpers";
import { render, cleanup } from "@testing-library/react";
import { USERS } from "../../data/users";
import ChooseProfile from "./index";

afterEach(cleanup);

const ChooseProfileWithRouter = () => {
  return (
    <Router history={history}>
      <ChooseProfile />
    </Router>
  );
};

describe("<ChooseProfile />", () => {
  it("renders without error", () => {
    const component = render(<ChooseProfileWithRouter />);

    expect(component).toMatchSnapshot();
  });

  it("renders four profiles", async () => {
    const { getAllByTestId } = render(<ChooseProfileWithRouter />);

    const profiles = await getAllByTestId("profile-link");

    expect(profiles.length).toBe(USERS.length);
  });
});
