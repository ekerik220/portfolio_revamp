import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import Link from "./Link";

export default function ContactArea() {
  return (
    <Container>
      <SectionTitle id="contact-area">Contact me!</SectionTitle>
      <LinkArea>
        <Link href="mailto:ekerik220@gmail.com">ekerik220@gmail.com</Link>
        <Divider />
        <Link href="https://www.linkedin.com/in/evan-kerik/" newTab>
          LinkedIn
        </Link>
        <Divider />
        <Link href="https://github.com/ekerik220" newTab>
          GitHub
        </Link>
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
