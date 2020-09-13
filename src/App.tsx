import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Title from "./components/Title";
import About from "./components/About";
import AboutTerminal from "./components/AboutTerminal";
import { ProjectsArea } from "./components/ProjectsArea";
import ContactArea from "./components/ContactArea";

export default function App() {
  return (
    <MainContainer>
      <Header />
      <Title />
      <About />
      <AboutTerminal />
      <ProjectsArea />
      <ContactArea />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0 40px;
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;
`;
