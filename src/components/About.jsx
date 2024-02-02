import React from "react";
import styled from "styled-components";
import profile from "../assets/images/headshot.jpeg";
import resume from "../assets/ewillroth_resume.pdf";

const About = () => {
  return (
    <Abt id="about">
      <h1>About Me</h1>
      <div className="abtcontent">
        <img src={profile} alt="" width="100px" height="100px" />
        <Styledp>
          I am a javascript developer based in Houston, TX. I enjoy coding
          because it allows me to craft solutions to a variety of problems. In
          my free time I enjoy being outdoors, playing sports, biking, watching
          tv and movies, and playing board games and video games.
          <br />
          <br />
          <a href={resume} download>
            Download my resume!
          </a>
        </Styledp>
      </div>
    </Abt>
  );
};

const Abt = styled.div`
  background: #010009;
  width: 100%;
  padding: 110px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  position: relative;
  top: -80px;
  color: #ffffff;
  h1 {
    font-size: 30px;
    margin-bottom: 40px;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  .abtcontent {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 645px) {
      flex-direction: column;
    }
  }
`;

const Styledp = styled.p`
  color: #ffffff;
  width: 50%;
  line-height: 1.75;
  font-size: 16px;
  padding: 30px;
  font-family: Arial, Helvetica, sans-serif;
  a {
    color: #4fc2e2;
  }
  @media (max-width: 645px) {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    width: 85%;
    border: none;
  }
`;

export default About;
