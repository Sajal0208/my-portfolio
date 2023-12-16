import React from "react";
import styled from "styled-components";
import resume from "../img/Sajal_Dewangan_Resume.png";
import PrimaryButton from "../Components/PrimaryButton";

const ImageSection = () => {
  
  const calculate_age = () => {
    const my_dob = new Date('07/02/2002')
    var month_diff = Date.now() - my_dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age
  }

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
            <p>Role</p>
          </div>
          <div className="info">
            <p>: Sajal Dewangan</p>
            <p>: {calculate_age()}</p>
            <p>: Indian</p>
            <p>: English/Hindi</p>
            <p>: India</p>
            <p>: Full-Stack Developer</p>
          </div>
        </div>
        <a href = "https://drive.google.com/file/d/1sqG1cm3V0N_nI9xEK45RwBMfXwm9C4Y6/view?usp=sharing" target = '_blank'><PrimaryButton title={"Download CV"} /></a>
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
