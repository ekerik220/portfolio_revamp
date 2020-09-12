import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Title from "./components/Title";

export default function App() {
  return (
    <MainContainer>
      <Header />
      <Title />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0 40px;
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;
`;
