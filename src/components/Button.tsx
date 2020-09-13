import React from "react";
import styled from "styled-components";
import ExternalLinkIcon from "../assets/icons/ExternalLinkIcon";
import GithubIcon from "../assets/icons/GithubIcon";

interface PropTypes extends React.HTMLAttributes<HTMLAnchorElement> {
  type: "live-demo" | "view-source";
  href: string;
}

export default function Button({ href, type, ...rest }: PropTypes) {
  return (
    <Container type={type} href={href} {...rest} target="_blank">
      {type === "live-demo" ? "Live Demo" : "View Source"}
      {type === "live-demo" ? <StyledExternalLinkIcon /> : <StyledGithubIcon />}
    </Container>
  );
}

const Container = styled.a<PropTypes>`
  display: flex;
  align-items: center;
  padding: 0 14px;
  line-height: 40px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
  transition: 0.15s ease-in-out;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  color: ${({ theme, type }) =>
    type === "live-demo" ? "white" : theme.colors.primaryColor};
  background: ${({ theme, type }) =>
    type === "live-demo" ? theme.colors.primaryColor : "white"};

  &:hover {
    opacity: 0.75;
    transform: translate(0, -1px);
    box-shadow: 0 6px 6px rgba(50, 50, 93, 0.11), 0 3px 3px rgba(0, 0, 0, 0.08);
  }
`;

const StyledExternalLinkIcon = styled(ExternalLinkIcon)`
  width: 16px;
  margin-left: 5px;
`;

const StyledGithubIcon = styled(GithubIcon)`
  width: 16px;
  margin-left: 5px;
`;
