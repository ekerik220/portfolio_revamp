import React from "react";
import styled from "styled-components";

interface PropTypes extends React.HTMLAttributes<HTMLAnchorElement> {
  fontSize?: number;
  href: string;
}

export default function Link({ href, children, ...rest }: PropTypes) {
  return (
    <Container>
      <LinkText href={href} {...rest}>
        {children}
      </LinkText>
      <Underline />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkText = styled.a<PropTypes>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "19px")};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

const Underline = styled.div`
  width: 0px;
  height: 7px;
  background: ${({ theme }) => theme.colors.primaryColor};
  margin-top: 15px;
  transition: width 0.2s ease-in;

  ${LinkText}:hover + & {
    width: 100%;
  }
`;
