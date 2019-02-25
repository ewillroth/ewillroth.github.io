import React from 'react';
import styled from 'styled-components';
import gitHubIcon from '../assets/icons/ContactIcons-03.svg'
import linkedInIcon from '../assets/icons/ContactIcons-04.svg'
import phoneIcon from '../assets/icons/ContactIcons-02.svg'
import emailIcon from '../assets/icons/ContactIcons-01.svg'

const Contact = () => {
	return (
		<Cont id="contact">
			<ContactCard>
				<a href="tel:+12816852086"><img src={phoneIcon} alt="phone"></img></a>
				<p>281-685-2086</p>
			</ContactCard>
			<ContactCard>
				<a href="mailto:ewillroth@gmail.com"><img alt="email" src={emailIcon}></img></a>
				<p id="mailp">ewillroth@gmail.com</p>
			</ContactCard>
			<ContactCard>
				<a href="https://github.com/ewillroth"><img src={gitHubIcon} alt="github" /></a>
				<p>github.com/ewillroth</p>
			</ContactCard>
			<ContactCard>
				<a href="https://www.linkedin.com/in/ewillroth/"><img src={linkedInIcon} alt="linkedin" /></a>
				<p>linkedin.com/in/ewillroth</p>
			</ContactCard>
   	 </Cont>
	);
}

const Cont = styled.div`
	background: #CCCECE;
	height: 50vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
`
const ContactCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #000;
	img{
		width: 100px;
		margin-bottom: 20px;
	}
	img:hover {
		transform: scale(.97);
	}
`

export default Contact;
