import React from 'react';
import styled from 'styled-components';
import ordeerLanding from '../assets/images/ordeerLanding.png'
import settleLanding from '../assets/images/settleLanding.png'

const Projects = () => {
	return (
		<Proj id="projects">
			<h1>Projects</h1>
				<Project>
					<p className="projName">Ordeer</p>
					<p>An online ordering platform for restaurants</p>
					<div>
						<a href='http://www.ordeer.net'>
							<img src={ordeerLanding} alt="project landing page" />
						</a>
						<ul>
							<li>Group project built in 3 weeks with two other students</li>
							<li>Contains only functional components to utilize React Hooks</li>
							<li>Learned & implemented Material-UI to create display cards for each menu item</li>
							<li>I focused on front-end code including the registration page, order page and Jest testing</li>
							<li>Code: github.com/restaurant-ordering/ordeer</li>
						</ul>
					</div>
				</Project>
				<Project>
					<p className="projName">Settle</p>
					<p>A tool to help groups make decisions</p>
					<div>
						<a href='https://settleit.app'>
							<img src={settleLanding} alt="project landing page" />
						</a>
						<ul>
							<li>Awarded most technical in my cohort</li>
							<li>Learned & implemented socket.io to enable realtime updates for suggestions and participants</li>
							<li>Used Firebase storage to enable users to upload images</li>
							<li>Live site: settleit.app | Code: github.com/ewillroth/settle</li>
						</ul>
					</div>
				</Project>
		</Proj>
	);
}

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
	color: #CCCECE;
	font-family: 'Nunito', sans-serif;
		h1 {
			font-size: 30px;
			margin-bottom: 60px;
			border-bottom: 1px solid #CCCECE;
		}
		.projName {
			font-size: 26px;
			margin-top: 20px;
		}
`

const Project = styled.div`
	color: #CCCECE;
	font-family: 'Nunito', sans-serif;
	margin: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%
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
		}
		@media (max-width: 830px){
			flex-direction: column;
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

`

export default Projects;
