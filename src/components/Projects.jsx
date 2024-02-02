import React from "react";
import styled from "styled-components";
import ordeerLanding from "../assets/images/ordeerLanding.png";
import settleLanding from "../assets/images/settleLanding.png";
import RunCalendarImg from "../assets/images/runCalendar.png";

const Projects = () => {
  return (
    <Proj id="projects">
      <h1>Personal Projects</h1>
      <Project>
        <p className="projName">Settle</p>
        <p className="tagline">A tool to help groups make decisions</p>
        <div>
          <a href="https://github.com/ewillroth/Settle">
            <img src={settleLanding} alt="project landing page" />
          </a>
          <ul>
            <li>Won "most technical project" in my cohort at DevMountain</li>
            <li>
              Learned & implemented socket.io to enable realtime updates for
              suggestions and participants
            </li>
            <li>Used Firebase storage to enable users to upload images</li>
            <li>Code: github.com/ewillroth/settle</li>
          </ul>
        </div>
      </Project>
      <Project>
        <p className="projName">Ordeer</p>
        <p className="tagline">An online ordering platform for restaurants</p>
        <div>
          <a href="http://github.com/restaurant-ordering/ordeer">
            <img src={ordeerLanding} alt="project landing page" />
          </a>
          <ul>
            <li>Group project built in 3 weeks with two other students</li>
            <li>Contains only functional components to utilize React Hooks</li>
            <li>
              Learned & implemented Material-UI to create display cards for each
              menu item
            </li>
            <li>
              I focused on front-end code including the registration page, order
              page and Jest testing
            </li>
            <li>Code: github.com/restaurant-ordering/ordeer</li>
          </ul>
        </div>
      </Project>
      <Project>
        <p className="projName">RunCalendar</p>
        <p className="tagline">
          Add marathon training plan events to your google calendar
        </p>
        <div>
          <a href="https://runcalendar.app">
            <img src={RunCalendarImg} alt="project screenshot" />
          </a>
          <ul>
            <li>Built with vanilla HTML, CSS, and Javascript</li>
            <li>
              Uses google calendar API to create events and add them to users'
              google calendar
            </li>
            <li>Code: github.com/ewillroth/runcalendar</li>
            <li>Live site: https://runcalendar.app</li>
          </ul>
        </div>
      </Project>
    </Proj>
  );
};

const Proj = styled.div`
	background: #010009;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	top: -80px;
	margin-bottom: -80px
	padding: 80px 0px;
	color:  #FFFFFF;
			font-family: 'Open Sans', sans-serif;
		h1 {
			font-size: 30px;
			margin-bottom: 40px;
		}
		.projName {
			font-size: 24px;
			margin-top: 20px;
		}
`;

const Project = styled.div`
	color:  #FFFFFF;
	font-family: Arial, Helvetica, sans-serif;
	margin: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%
	ul{
		list-style-type: circle;
		margin-left: 10px;
	}
	.tagline{
		font-style: italic;
	}
	img {
		width: 380px;
	}
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		li {
			width: 35vw;
			margin-top: 20px
			font-size: 16px;
		}
		@media (max-width: 830px){
			flex-direction: column;
			ul{
				list-style-type: none;
				margin-left: 0px;
			}
			li {
				width: 85vw;
				text-align: center;
			}
			p {
				text-align: center;
			}
			img {
				width: 280px;
			}
		}
	}
	a {
		margin-right: 20px;
	}
	p {
		margin-bottom: 20px;
	}

`;

export default Projects;
