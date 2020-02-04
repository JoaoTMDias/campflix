import React from "react";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { Row } from "../../components/row";
import { Container } from "../../components/row/styles";
import { RELATED } from "../../data/related";

export const Homepage = ({ history }) => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Hero />
        <Container>
          <Row
            id={RELATED.id}
            title={RELATED.title}
            data={RELATED.data}
            history={history}
          />
        </Container>
      </main>
    </div>
  );
};

export default Homepage;
