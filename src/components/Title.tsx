import React from "react";
import styled, { keyframes } from "styled-components";

export default function Title() {
  return (
    <Container>
      Evan Kerik
      <BlinkingCursor>_</BlinkingCursor>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  font-size: 72px;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  color: ${({ theme }) => theme.colors.primaryColor};

  &::before {
    content: ">";
    margin-right: 35px;
  }

  @media only screen and (max-width: 770px) {
    font-size: 38px;
  }
`;

const blink = keyframes`
    0%, 50% { opacity: 0 }
    51%, 100% { opacity: 0.75 }
`;

const BlinkingCursor = styled.span`
  background: ${({ theme }) => theme.colors.primaryColor};
  animation: ${blink} 1s linear infinite;
  user-select: none;
`;
