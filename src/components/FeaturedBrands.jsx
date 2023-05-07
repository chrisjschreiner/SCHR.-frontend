import React from "react";
import styled from "styled-components/macro";

const Container = styled.div``;
const Title = styled.h1`
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin: 35px 0px;
`;

const FeaturedBrands = () => {
  return (
    <Container>
      <Title>Featured Brands</Title>
      <img
        src="https://i.ibb.co/hyB8Bn5/20-21-logos-stacked.png"
        style={{ width: "100%", marginBottom: "35px" }}
        alt="Featured Brands"
      />
    </Container>
  );
};

export default FeaturedBrands;
