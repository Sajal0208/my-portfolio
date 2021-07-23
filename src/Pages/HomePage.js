import React from "react";
import Particle from "../Components/Particle";
import styled from "styled-components";
import {  GitHub, LinkedIn } from "@material-ui/icons";
import CodeIcon from '@material-ui/icons/Code';

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Sajal Dewangan</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          mollitia. Laborum quia esse laudantium inventore quod fuga autem aut
          ea.
        </p>
        <div className="icons">
          <a href = "https://leetcode.com/_godLike1000/" target="_blank"  className="icon i-leetcode">
            <CodeIcon />
          </a>
          <a href = "https://github.com/Sajal0208"target="_blank"  className="icon i-github">
            <GitHub />
          </a>
          <a href = "https://www.linkedin.com/in/sajaldewangan/" target="_blank" className="icon i-linkedin">
            <LinkedIn />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
  }

  .icons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .icon {
      border: 2px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all .4s ease-in-out;
      cursor: pointer;
      &:hover{
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
      svg {
        margin: 0.5rem;
      }
    }
    .i-leetcode{
        &:hover{
            color: black;
        }
    }
    .i-github{
        &:hover{
            color: black
        }
    }
    .i-linkedin{
        &:hover{
            color: black;
        }
    }
  }
`;

export default HomePage;
