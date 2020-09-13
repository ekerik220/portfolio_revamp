import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import Link from "./Link";

export default function ContactArea() {
  return (
    <Container>
      <SectionTitle>Contact me!</SectionTitle>
      <LinkArea>
        <Link href="#">ekerik220@gmail.com</Link>
        <Divider />
        <Link href="#">LinkedIn</Link>
        <Divider />
        <Link href="#">GitHub</Link>
      </LinkArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;

const LinkArea = styled.div`
  display: flex;
`;

const Divider = styled.div`
  &::before {
    content: "||";
    margin: 0 25px;
  }
`;
