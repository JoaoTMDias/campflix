import React, { Fragment } from "react";
import { Header } from "../../components/header";
import { ChooseProfile } from "../../components/choose-profile";

export const WelcomePage = () => {
  return (
    <Fragment>
      <Header nav={false} />
      <ChooseProfile />
    </Fragment>
  );
};

export default WelcomePage;
