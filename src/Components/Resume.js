import React, { useState, useEffect } from "react";
import { MainLayout, InnerLayout } from "../styles/Layout";
import Title from "./Title";
import styled from "styled-components";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";
import axios from "axios";

const metaficWork = [
  "Implemented websites, and landing pages from concept through deployment.",
  "Assessed UX and UI designs for technical feasibility.",
  "Standardized all output with a new, responsive, approach and strategy.",
  "Used: Typescript (ReactJs), HTML/CSS, Jest and Enzyme for testing, Git."
]

const pCoderWork = [
  "Responsible for API design and development of RESTful Services for the enterprise product in the business.",
  "Currently Developing an in-house web app using NodeJs, MongoDB ExpressJs and JWT for Authentication.",
  "Worked as a React Developer in some project and made responsive UI's for the clients",
  "Used: JavaScript (Node & React), HTML/CSS, AWS, MongoDB, JWT, Git."
]

const education = {
  "college": ["GPA: 8.24"],
  "school": ["Percentage: 93.2%"]
}

function Resume() {
  const [PCoder, setPCoder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gpa, setGpa] = useState([]);
  const [percentage, setPercentage] = useState([]);

  const fetchMoviesHandler = () => {
  // If not using firebase
    setIsLoading(true);
    setPCoder(pCoderWork);
    setGpa(education.college)
    setPercentage(education.school);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <div>
      <ResumeStyled>
        <Title title={"Resume"} span={"Resume"} />
        <InnerLayout>
          <div className="small-title u-small-title-margin">
            <SmallTitle icon={briefcase} title={"Working Experience"} />
          </div>
          <div className="resume-content">
            {!isLoading && (
              <ResumeItem
                year={"Nov 2021 - Aug 2022"}
                title={"Software Engineer"}
                subtitle={"Metafic"}
                text={metaficWork}
              />
            )}
            {!isLoading && (
              <ResumeItem
                year={"Jun 2021 - Jul 2021"}
                title={"Full-Stack Developer"}
                subtitle={"PCoders"}
                text={PCoder}
              />
            )}
            {isLoading && <p>Loading...</p>}
          </div>
          <div className="small-title u-small-title-margin">
            <SmallTitle icon={school} title={"Education"} />
          </div>
          <div className="resume-content">
            {!isLoading && (
              <ResumeItem
                year={"Sep 2020 - Present"}
                title={"Bachelor of Technology, Computer Science"}
                subtitle={"Kalinga Institute of Industrial Technology"}
                text={gpa}
              />
            )}
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
              <ResumeItem
                year={"Mar 2018 - Apr 2020"}
                title={"Grade XII(P.C.M)"}
                subtitle={"Krishna Public School"}
                text={percentage}
              />
            )}
          </div>
        </InnerLayout>
      </ResumeStyled>
    </div>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
