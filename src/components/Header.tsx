import React from "react";
import styled from "styled-components";
import Link from "./Link";

export default function Header() {
  return (
    <Container>
      <Nav>
        <Link href="#projects-area">Projects</Link>
        <Link href="#contact-area">Contact</Link>
      </Nav>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 75px;
`;

const Nav = styled.nav`
  display: flex;
  width: 285px;
  justify-content: space-around;
`;
