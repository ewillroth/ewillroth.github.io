import React from 'react';
import styled from 'styled-components';
import profile from '../assets/images/linkedinpic.jpeg';

const About = () => {
	return (
		<Abt id="about">
			<h1>About Me</h1>
			<div className="abtcontent">
				<img src={profile} alt="" width="100px" height="100px" />
				<Styledp>
					I am currently looking for a job as a web developer in the Dallas
					area. Prior to studying web development, I worked in a few different
					industries—including the self-driving car and construction
					industries—that utilize software in unique ways. I experienced
					firsthand the impact of software development in the real world and
					became interested in pursuing a career in web development because of
					this experience. I recently graduated from DevMountain's Web
					Development Immersive course and look forward to the continuing to
					learn and grow as a developer.
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
	color:  #FFFFFF;
	width: 50%;
	line-height: 1.75;
	font-size: 16px;
	background-color: #24272B;
	padding: 30px;
	font-family: Arial, Helvetica, sans-serif;
	@media (max-width: 645px){
		margin-top: 20px;
		text-align: center;
		font-size: 14px;
		width: 85%;
	}
`

export default About;
