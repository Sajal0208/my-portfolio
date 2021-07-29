import React from "react";
import styled from "styled-components";
import resume from "../img/SAJ.png";
import PrimaryButton from "../Components/PrimaryButton";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resumeimage" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Sajal Dewangan</span>
        </h4>
        <p className="paragraph">
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Sajal Dewangan</p>
            <p>: 18</p>
            <p>: Indian</p>
            <p>: English/Hindi</p>
            <p>: Raipur, India</p>
            <p>: MERN Developer</p>
          </div>
        </div>
        <a href = "https://drive.google.com/file/d/1hMaQ96ndkpbRd0SCvvOJYg2OwVPQPqtV/view?usp=sharing" target = '_blank'><PrimaryButton title={"Download CV"} /></a>
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
