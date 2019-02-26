import React from 'react';
import styled, { keyframes } from 'styled-components';

const Splash = props => {
	return (
		<StyledSplash>
			<Title>Eric Willroth</Title>
			<SubTitle>Web Developer</SubTitle>
			<i className="material-icons" onClick={() => document.getElementById('about').scrollIntoView({
				behavior: 'smooth', block: 'start'
			})}>expand_more</i>
		</StyledSplash>
	);
}
const grow = keyframes`

100% {
	transform: scale(1.5)
}
`

const StyledSplash = styled.div`
	background-image: url(https://images.unsplash.com/photo-1540675990483-e5441d694ff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80);
	background-position: center;
	background-size: cover;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 700px;
	position: relative;
	top: -80px;
	color: #CCCECE;
	@media (max-width: 700px) {
		height: 500px;
	}
	i {
		margin-top: 20px;
		font-size: 50px;
	}
	i:hover {
		animation: ${grow} 0.2s linear forwards;
		cursor: pointer;
	}
`
const Title = styled.h1`
	font-size: 40px;
	font-weight: 500;
		font-family: 'Merriweather', serif;
`

const SubTitle = styled.h1`
	font-size: 24px;
	font-weight 300;
	margin-top: 20px;
	font-family: 'Merriweather', serif;
`


export default Splash;
