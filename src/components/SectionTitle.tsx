import React from "react";
import styled from "styled-components";

export default function SectionTitle(
  props: React.HTMLAttributes<HTMLHeadingElement>
) {
  return (
    <Container>
      <Section>{props.children}</Section>
      <Underline />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;

const Section = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 100px 0 20px 0;
`;

const Underline = styled.div`
  width: 50px;
  height: 8px;
  background: ${({ theme }) => theme.colors.primaryColor};
`;
