import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../styles/theme";

export default function AboutTerminal() {
  return (
    <Container>
      <TerminalHeader>
        <TerminalHeaderButtonIcon color={theme.terminal.closeButtonColor} />
        <TerminalHeaderButtonIcon color={theme.terminal.minimizeButtonColor} />
        <TerminalHeaderButtonIcon color={theme.terminal.maximizeButtonColor} />
      </TerminalHeader>
      <TerminalBody>
        <TerminalInputText>Evan.currentLocation</TerminalInputText>
        <TerminalReturnText>"Yamanashi, Japan"</TerminalReturnText>

        <TerminalInputText>Evan.contactInfo</TerminalInputText>
        <TerminalReturnText>
          ["
          <TerminalLink href="mailto:ekerik220@gmail.com">
            ekerik220@gmail.com
          </TerminalLink>
          ", "
          <TerminalLink
            href="https://www.linkedin.com/in/evan-kerik/"
            target="_blank"
          >
            LinkedIn
          </TerminalLink>
          ", "
          <TerminalLink href="https://github.com/ekerik220" target="_blank">
            github
          </TerminalLink>
          "]
        </TerminalReturnText>

        <TerminalInputText>Evan.resume</TerminalInputText>
        <TerminalReturnText>
          "<TerminalLink href="#">evan_kerik.pdf</TerminalLink>"
        </TerminalReturnText>

        <TerminalInputText>Evan.interests</TerminalInputText>
        <TerminalReturnText>
          ["web development", "photography", "gaming", "basketball"]
        </TerminalReturnText>

        <TerminalInputText>Evan.education</TerminalInputText>
        <TerminalReturnText>
          "B.Sc. Computer Science - University of Calgary"
        </TerminalReturnText>

        <TerminalInputText>Evan.skills</TerminalInputText>
        <TerminalReturnText>
          ["React", "Redux", "TypeScript", "Styled Components", "Node.js",
          "GraphQL", "MongoDB", "Jest", "React Testing Library"]
        </TerminalReturnText>

        <TerminalInputText>
          <BlinkingCursor>_</BlinkingCursor>
        </TerminalInputText>
      </TerminalBody>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  background: ${({ theme }) => theme.terminal.headerBackground};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TerminalHeaderButtonIcon = styled.div<{ color: string }>`
  width: 14px;
  height: 14px;
  margin-left: 9px;
  background: ${({ color }) => color};
  border-radius: 50%;
`;

const TerminalBody = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.terminal.bodyBackground};
  padding: 35px 35px;
  font-size: 17px;
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  line-height: 22px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.15),
    0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.12);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const TerminalInputText = styled.span`
  display: flex;
  color: ${({ theme }) => theme.terminal.inputTextColor};

  &::before {
    content: ">";
    margin-right: 10px;
  }
`;

const TerminalReturnText = styled.span`
  color: ${({ theme }) => theme.terminal.returnTextColor};
  margin-bottom: 25px;
`;

const TerminalLink = styled.a`
  color: ${({ theme }) => theme.terminal.linkTextColor};
  text-decoration: none;
  transition: 0.1s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
`;

const blink = keyframes`
    0%, 50% { opacity: 0 }
    51%, 100% { opacity: 0.75 }
`;

const BlinkingCursor = styled.span`
  background: ${({ theme }) => theme.terminal.inputTextColor};
  animation: ${blink} 1s linear infinite;
  user-select: none;
`;
