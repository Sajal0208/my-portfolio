import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layout";
import ProgressBar from "./ProgressBar";
import Title from "./Title";

function Skills() {
  return (
    <SkillsStyled>
    
        <Title title={"My Skills"} span={"My Skills"} />
        <InnerLayout>
          <div className="skills">
            <ProgressBar title={"C++"} width={"85%"} text={"85%"} />
            <ProgressBar title={"Javascript"} width={"70%"} text={"70%"} />
            <ProgressBar title={"HTML5"} width={"80%"} text={"80%"} />
            <ProgressBar title={"CSS3"} width={"50%"} text={"50%"} />
            <ProgressBar title={"ReactJs"} width={"70%"} text={"70%"} />
            <ProgressBar title={"NodeJs"} width={"60%"} text={"60%"} />
            <ProgressBar title={"Python"} width={"30%"} text={"30%"} />
          </div>
        </InnerLayout>
      
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
