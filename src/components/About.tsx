import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Container>
      I'm a web developer with a passion for building simple, beautiful user
      experiences.
      <br />
      Check out my <Link href="#projects-area">side-projects</Link> below.
    </Container>
  );
}

const Container = styled.div`
  font-size: 21px;
  padding: 80px 0;
  line-height: 40px;

  @media only screen and (max-width: 770px) {
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 19px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: 700;
  transition: 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
