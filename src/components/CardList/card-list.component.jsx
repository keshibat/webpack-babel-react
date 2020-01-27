import React from "react";
import styled from "@emotion/styled";
import Card from "../Card/card.component.jsx";

const CartListContainer = styled.div({
  width: "85vw",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "50px",
  marginTop: "150px"
});

const CardList = props => (
  <CartListContainer>
    {props.statistic.map(stats => (
      <Card key={stats.id} stats={stats} />
    ))}
  </CartListContainer>
);

export default CardList;
