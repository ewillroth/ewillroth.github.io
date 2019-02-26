import React from 'react';
import styled from 'styled-components';
import ReactIcon from "../assets/icons/DevIcons-01.svg";
import ReduxIcon from "../assets/icons/DevIcons-14.svg";
import JavaScriptIcon from "../assets/icons/DevIcons-03.svg";
import ExpressIcon from "../assets/icons/DevIcons-04.svg";
// import VueIcon from "../assets/icons/DevIcons-05.svg";
import GitIcon from "../assets/icons/DevIcons-06.svg";
import SocketIcon from "../assets/icons/DevIcons-07.svg";
import PostgeSQLIcon from "../assets/icons/DevIcons-08.svg";
import NodeIcon from "../assets/icons/DevIcons-09.svg";
import NPMIcon from "../assets/icons/DevIcons-10.svg";
import CSSIcon from "../assets/icons/DevIcons-13.svg";
import HTMLIcon from "../assets/icons/DevIcons-15.svg";
import SassIcon from '../assets/icons/DevIcons-02.svg';
import MaterialIcon from '../assets/icons/DevIcons-11.svg';


const Skills = () => {
	return (
		<Skill id="skills">
			<h1>Skills</h1>
			<IconContainer>
				<Icon>
					<p>React</p>
					<a href="https://reactjs.org">
						<img src={ReactIcon} alt="React"/>
					</a>
				</Icon>
				<Icon>
					<p>Redux</p>
					<a href="https://redux.js.org">
						<img src={ReduxIcon} alt="Redux"/>
					</a>
				</Icon>
				<Icon><p>ES6+</p>
						<a href="https://es6.io">
							<img src={JavaScriptIcon} alt="ES6+"/>
						</a>
				</Icon>
				<Icon>
					<p>Express</p>
					<a href="https://expressjs.com">
						<img src={ExpressIcon} alt="Express"/>
					</a>
				</Icon>
				<Icon>
					<p>NPM</p>
					<a href="https://www.npmjs.com">
						<img src={NPMIcon} alt="NPM"/>
					</a>
				</Icon>
				<Icon>
					<p>Sass</p>
					<a href="https://sass-lang.com/">
						<img className="smallimg" src={SassIcon} alt="Sass"/>
					</a>
				</Icon>
				<Icon>
					<p>Git + GitHub</p>
					<a href="https://git-scm.com">
						<img src={GitIcon} alt="Git + GitHub"/>
					</a>
				</Icon>
				<Icon>
					<p>Socket.io</p>
					<a href="https://socket.io">
						<img src={SocketIcon} alt="Socket.io"/>
					</a>
				</Icon>
				<Icon><p>PostgreSQL</p>
					<a href="https://www.postgresql.org">
						<img src={PostgeSQLIcon} alt="PostgreSQL"/>
					</a>
				</Icon>
				<Icon>
					<p>Node.js</p>
					<a href="https://nodejs.org/en">
						<img src={NodeIcon} alt="Node.js"/>
					</a>
				</Icon>
				<Icon>
					<p>CSS3</p>
					<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">
						<img src={CSSIcon} alt="CSS3"/>
					</a>
				</Icon>
				<Icon>
					<p>HTML5</p>
					<a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
						<img src={HTMLIcon} alt="HTML5"/>
					</a>
				</Icon>
				<Icon>
					<p>Material-UI</p>
					<a href="https://material-ui.com/">
						<img className="smallimg" src={MaterialIcon} alt="Material-UI"/>
					</a>
				</Icon>
			</IconContainer>
		</Skill>
	);
}

const Skill = styled.div`
	background: #010009;
	width: 100%;
	position: relative;
	top: -80px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	font-family: 'Nunito', sans-serif;
	align-items: center;
	color: #CCCECE;
		h1 {
			font-size: 30px;
			margin-bottom: 80px;
		}
`

const IconContainer = styled.div`
	width: 80%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`

const Icon = styled.div`
	height: 140px;
	width: 140px;
	margin: 10px
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-family: 'Nunito', sans-serif;
	align-items: center;

	img {
		width: 150px;
		height: 150px;
	}
	.smallimg {
		width: 120px;
		height: 120px;
		margin: 15px;
	}
	@media (max-width: 700px) {
		img {
				width: 120px;
				height: 120px;
		}
		.smallimg {
				width: 90px;
				height: 90px;
				margin: 30px;
			}
	}
`


export default Skills;
