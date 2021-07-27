import React from "react";
import { InnerLayout } from "../styles/Layout";
import styled from "styled-components";
import Title from "../Components/Title";
import ServiceCard from "./ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";
const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"Services"} />
        <div className="services">
          <ServiceCard
            title={"Web Design"}
            image={design}
            paragraph={
              "I am a specialist on web developing ground and got a profound knowledge of doing anything related to this platform. Also, I have got an impressive urgency of learning and gaining new skills and knowledge with total ease. I am skillful at programming and coding languages."
            }
          />
          <div className="mid-card">
            <ServiceCard
              title={"Artificial Intelligence"}
              image={intelligence}
              paragraph={
                "Coming Soon..."
              }
            />
          </div>
          <ServiceCard
            title={"Game Development"}
            image={gamedev}
            paragraph={
              "Coming Soon..."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
