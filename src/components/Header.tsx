import React from "react";
import styled from "styled-components";
import Link from "./Link";

export default function Header() {
  return (
    <Container>
      <Nav>
        <StyledLinked href="#projects-area">Projects</StyledLinked>
        <StyledLinked href="#contact-area">Contact</StyledLinked>
      </Nav>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 75px;

  @media only screen and (max-width: 770px) {
    justify-content: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  width: 285px;
  justify-content: space-around;
`;

const StyledLinked = styled(Link)`
  font-size: 21px;

  @media only screen and (max-width: 770px) {
    font-size: 19px;
  }
`;
