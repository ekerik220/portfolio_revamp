import React from "react";
import styled from "styled-components";
import Button from "./Button";

interface PropTypes {
  title: string;
  description: string;
  skills: string[];
  url: string;
  sourceURL: string;
  projectImgURL: string;
}

export default function ProjectTile(props: PropTypes) {
  return (
    <Container>
      <ProjectImage src={props.projectImgURL} />
      <ProjectBackground></ProjectBackground>
      <ProjectContent>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <SkillsArea>
          {props.skills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </SkillsArea>
        <ButtonArea>
          <StyledButton type="live-demo" href="#" />
          <StyledButton type="view-source" href="#" />
        </ButtonArea>
      </ProjectContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  background: white;
  border-radius: 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.05),
    0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 60px;
`;

const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

const ProjectBackground = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  height: 110%;
  width: 83%;
  background: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMxNiIgdmlld0JveD0iMCAwIDQ0NiAzMTYiIHdpZHRoPSI0NDYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09IiI+PHBhdGggZD0ibTI3NC41NDkwNTQgMzE2aDE3MS40NTA5NDZ2LTMxNmgtMzY2LjIyMTgzMDNsLTI3LjgxNjg1NjMgMTExLjMwNzAxIDUxLjEzNjc5NDYgMjA0LjY5Mjk5eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0yNC4xNTEwOTI1IDBoNTUuNjk3ODE1bC0yNy44ODg4ODQyIDExMS4zMjA5ODR6IiBmaWxsPSIjYzFkZGZmIiBvcGFjaXR5PSIuNTU2ODM5Ii8+PHBhdGggZD0ibTUxLjk2MDMxMTkgMTExLjMxODAyNCA1MS4xNDkyMjcxIDIwNC42ODE5NzZoLTEwMi4zMTE1NTcxNHoiIGZpbGw9IiM5Mzg3ZTQiIG9wYWNpdHk9Ii41MjY2MDgiLz48L2c+PC9zdmc+");
  background-size: cover;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 60px;
  z-index: 2;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 35px;
`;

const Description = styled.p`
  font-size: 15px;
  margin: 0;
  line-height: 1.5;
`;

const SkillsArea = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Skill = styled.span`
  border: 2px solid ${({ theme }) => theme.colors.skillBorderColor};
  padding: 6px 8px;
  font-size: 13px;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const ButtonArea = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
`;
