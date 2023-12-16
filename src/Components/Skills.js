import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layout";
import ProgressBar from "./ProgressBar";
import Title from "./Title";
import SkillTags from "./SkillTags";

function Skills() {
  return (
    <SkillsStyled>
        <Title title={"My Skills"} span={"My Skills"} />
        <InnerLayout>
          <div className="skills">
            <SkillTags text = {'Typescript'} />
            <SkillTags text = {'Javascript'} />
            <SkillTags text = {'ReactJs'} />
            <SkillTags text = {'NextJs'} />
            <SkillTags text = {'NodeJs'} />
            <SkillTags text = {'ExpressJs'} />
            <SkillTags text = {'MongoDB'} />
            <SkillTags text = {'Postgres'} />
            <SkillTags text = {'SQL'} />
            <SkillTags text = {'Redis'} />
            <SkillTags text = {'Prisma ORM'} />
            <SkillTags text = {'TailwindCSS'} />
            <SkillTags text = {'Git'} />
            <SkillTags text = {'Docker'} />
            <SkillTags text = {'tRPC'} />
            <SkillTags text = {'GraphQL'} />
            <SkillTags text = {'RestApi'} />
            <SkillTags text = {'HTML5'} />
            <SkillTags text = {'CSS3'} />
            <SkillTags text = {'Zod'} />
            <SkillTags text = {'WebRTC'} />
            <SkillTags text = {'Microservices'} />
            <SkillTags text = {'MonoRepos'} />
            <SkillTags text = {'AWS'} />
            <SkillTags text = {'Scalable Systems'} />
            <SkillTags text = {'Postman'} />
          </div>
        </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    align-content: center;
    background-color: var(--background-dark-color);
    border-radius: 5px;
    gap: 2rem;
  }
`;

export default Skills;
