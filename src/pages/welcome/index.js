import React, { Fragment } from "react";
import { Header } from "../../components/header";
import { ChooseProfile } from "../../components/choose-profile";

export const WelcomePage = () => {
  return (
    <Fragment>
      <Header nav={false} />
      <main>
        <ChooseProfile />
      </main>
    </Fragment>
  );
};

export default WelcomePage;
