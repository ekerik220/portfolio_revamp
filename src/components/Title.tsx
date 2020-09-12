import React from "react";
import styled, { keyframes } from "styled-components";

export default function Title() {
  return (
    <Container>
      Evan Kerik
      <BlinkingCursor />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 72px;
  font-family: monospace;
  color: ${({ theme }) => theme.colors.primaryColor};

  &::before {
    content: ">";
    margin-right: 35px;
  }
`;

const blink = keyframes`
    0%, 50% { opacity: 0 }
    51%, 100% { opacity: 0.75 }
`;

const BlinkingCursor = styled.div`
  width: 43px;
  height: 91px;
  background: ${({ theme }) => theme.colors.primaryColor};
  margin-left: 7px;
  animation: ${blink} 1s linear infinite;
`;
