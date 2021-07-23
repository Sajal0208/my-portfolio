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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iure atque sed, iste ea eligendi! Sapiente, voluptatem doloribus illo qui debitis aperiam expedita atque pariatur"
            }
          />
          <div className="mid-card">
            <ServiceCard
              title={"Artificial Intelligence"}
              image={intelligence}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iure atque sed, iste ea eligendi! Sapiente, voluptatem doloribus illo qui debitis aperiam expedita atque pariatur"
              }
            />
          </div>
          <ServiceCard
            title={"Game Development"}
            image={gamedev}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iure atque sed, iste ea eligendi! Sapiente, voluptatem doloribus illo qui debitis aperiam expedita atque pariatur"
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    .mid-card {
      margin: 0 1.2rem;
    }
  }
`;

export default ServicesSection;
