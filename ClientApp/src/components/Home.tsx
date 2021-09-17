import React from "react";
import DataView from "./DataView/DataView";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(157deg, #030305, #1c1e2a);
`;

const Home = () => (
  <Container>
    <DataView />
  </Container>
);

export default Home;
