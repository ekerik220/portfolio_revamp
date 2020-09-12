import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

export default function App() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0 15px;
`;
