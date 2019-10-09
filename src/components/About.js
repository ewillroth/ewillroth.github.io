import React from 'react';
import styled from 'styled-components';
import profile from '../assets/images/linkedinpic.jpeg';
import resume from '../assets/ewillroth_resume.pdf';

const About = () => {
	return (
		<Abt id="about">
			<h1>About Me</h1>
			<div className="abtcontent">
				<img src={profile} alt="" width="100px" height="100px" />
				<Styledp>
					I am a web developer based in Dallas, TX. I graduated from Texas A&M University with a bachelor of science in economics in 2012. I worked in a few different industries--including the self-driving car and construction industries--before deciding to make a career transition in 2018. After a few months of self-study, I enrolled DevMountain's web development immersive course which focused on React. I enjoy coding because it allows me to craft solutions to a variety of problems.

					In my free time I enjoy being outdoors, playing sports, biking, watching tv and movies, and playing board games and video games. <a href={resume} download>Download my resume!</a>
				</Styledp>
			</div>
		</Abt>
	);
}

const Abt = styled.div`
	background: #010009;
	width: 100%;
	padding: 110px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: 'Merriweather', serif;
	position: relative;
	top: -80px;
	color:  #FFFFFF;
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
			@media (max-width: 645px){
				flex-direction: column;
			}
	}
`

const Styledp = styled.p`
	color: #ffffff;
	width: 50%;
	line-height: 1.75;
	font-size: 16px;
	border: 3px solid #24272b;
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
