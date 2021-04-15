import React from 'react';
import styled from 'styled-components';
import ReactIcon from '../assets/icons/DevIcons-01.svg';
import ReduxIcon from '../assets/icons/DevIcons-14.svg';
import JavaScriptIcon from '../assets/icons/DevIcons-03.svg';
import ExpressIcon from '../assets/icons/DevIcons-04.svg';
// import VueIcon from "../assets/icons/DevIcons-05.svg";
import GitIcon from '../assets/icons/DevIcons-06.svg';
import SocketIcon from '../assets/icons/DevIcons-07.svg';
import PostgeSQLIcon from '../assets/icons/DevIcons-08.svg';
import NodeIcon from '../assets/icons/DevIcons-09.svg';
import NPMIcon from '../assets/icons/DevIcons-10.svg';
import CSSIcon from '../assets/icons/DevIcons-13.svg';
import HTMLIcon from '../assets/icons/DevIcons-15.svg';
import SassIcon from '../assets/icons/DevIcons-02.svg';
import MaterialIcon from '../assets/icons/DevIcons-11.svg';

const Skills = () => {
	return (
		<Skill>
			<ScrollTarget id='skills'></ScrollTarget>
			<h1>Skills</h1>
			<IconContainer>
				<Icon>
					<a href='https://reactjs.org'>
						<img src={ReactIcon} alt='React' />
					</a>
					<p>React</p>
				</Icon>
				<Icon>
					<a href='https://redux.js.org'>
						<img src={ReduxIcon} alt='Redux' />
					</a>
					<p>Redux</p>
				</Icon>
				<Icon>
					<a href='https://es6.io'>
						<img src={JavaScriptIcon} alt='ES6+' />
					</a>
					<p>ES6+</p>
				</Icon>
				<Icon>
					<a href='https://expressjs.com'>
						<img src={ExpressIcon} alt='Express' />
					</a>
					<p>Express</p>
				</Icon>
				<Icon>
					<a href='https://www.npmjs.com'>
						<img src={NPMIcon} alt='NPM' />
					</a>
					<p>NPM</p>
				</Icon>
				<Icon>
					<a href='https://sass-lang.com/'>
						<img src={SassIcon} alt='Sass' />
					</a>
					<p>Sass</p>
				</Icon>
				<Icon>
					<a href='https://git-scm.com'>
						<img src={GitIcon} alt='Git + GitHub' />
					</a>
					<p>Git + GitHub</p>
				</Icon>
				<Icon>
					<a href='https://socket.io'>
						<img src={SocketIcon} alt='Socket.io' />
					</a>
					<p>Socket.io</p>
				</Icon>
				<Icon>
					<a href='https://www.postgresql.org'>
						<img src={PostgeSQLIcon} alt='PostgreSQL' />
					</a>
					<p>PostgreSQL</p>
				</Icon>
				<Icon>
					<a href='https://nodejs.org/en'>
						<img src={NodeIcon} alt='Node.js' />
					</a>
					<p>Node.js</p>
				</Icon>
				<Icon>
					<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'>
						<img src={CSSIcon} alt='CSS3' />
					</a>
					<p>CSS3</p>
				</Icon>
				<Icon>
					<a href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'>
						<img src={HTMLIcon} alt='HTML5' />
					</a>
					<p>HTML5</p>
				</Icon>
				<Icon>
					<a href='https://material-ui.com/'>
						<img src={MaterialIcon} alt='Material-UI' />
					</a>
					<p>Material-UI</p>
				</Icon>
			</IconContainer>
		</Skill>
	);
};

const Skill = styled.div`
	background: #fff;
	width: 100%;
	position: relative;
	top: -80px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	font-family: 'Open Sans', sans-serif;
	align-items: center;
	color: #000;
	padding: 80px 0;

	h1 {
		font-size: 30px;
		margin-bottom: 40px;
	}
`;

const IconContainer = styled.div`
	width: 80%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	@media (max-width: 700px) {
		width: 85%;
	}
`;

const Icon = styled.div`
	height: 140px;
	width: 140px;
	margin: 10px
	display: flex;
	flex-direction: column;
	justify-content: center;
			font-family: 'Open Sans', sans-serif;
	align-items: center;
	img {
		width: 120px;
		height: 120px;
	}
	.smallimg {
		width: 120px;
		height: 120px;
		margin: 15px;
	}
	@media (max-width: 700px) {
		height: 120px;
		width: 120px;
		margin: 10px
		img {
				width: 100px;
				height: 100px;
		}
		.smallimg {
				width: 80px;
				height: 80px;
				margin: 30px;
			}
	}
`;

const ScrollTarget = styled.div`
	position: relative;
	top: -80px;
`;

export default Skills;
