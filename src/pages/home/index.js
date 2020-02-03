import React from "react";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { Row } from "../../components/row";
import { RELATED } from "../../data/related";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Row id={RELATED.id} title={RELATED.title} data={RELATED.data} />
    </div>
  );
};

export default Homepage;
