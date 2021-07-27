import React, { useState, useEffect } from "react";
import { MainLayout, InnerLayout } from "../styles/Layout";
import Title from "./Title";
import styled from "styled-components";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";
import axios from "axios";

function Resume() {
  const [PCoder, setPCoder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gpa, setGpa] = useState([]);
  const [percentage , setPercentage] = useState([])

  const fetchMoviesHandler = () => {
    setIsLoading(true);
    axios
      .get(
        "https://portfolio-website-560f4-default-rtdb.firebaseio.com/.json",
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((res) => {
        const data = res.data;
        return data;
      })
      .then((data) => {
        setPCoder(data.workExperience.pCoderWork);
        setGpa(data.education.college);
        setPercentage(data.education.school)
        setIsLoading(false);
      })
      .then((err) => {
        return err;
      });
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
