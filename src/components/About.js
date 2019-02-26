import React from 'react';
import styled from 'styled-components';

const About = () => {
	return (
			<Abt id="about">
			<h1>About Me</h1>
			<div className="abtcontent">
				<img src='https://lh3.googleusercontent.com/Fk-MdFmjy_yYzTDGmCE-2x0qG79FqHNLqyrQVOC7rYGqsp2Ne3PysXXw8I5lOhtbfAURSqanP6sKyTQPcvaxH9njJMslpgD7nW1GQwpVQe6pwW-jwW8lox50OZEgb8dsOJJHJlv4G0qXpuWAcvQRbAbMmyQ3DuzRCaO9LVylwcsYkl_g5Dbttcuzere4AbuT9cyn_KvQaz_roGCzWSSbQax4_qdr7idcwUCp0y1ars0jtEM7HO3Jx583bdHYiQTsWiwP_InBAPSMF8Qyj8UaAVw6IkbyJOnSm1AGCECrzQDS03agxR-zvGN_rJDPwmfPL47W7-LKvEDLnDwr0n_MIgwihZeXE6roMXEF00EzIuwLN3_5BhCWU_YCxbpGrpFKB2Rg2OnNBDOK50QcuXgVC74mxFnsW6cplyN4JAfT0QudMFgkLGBl8-q-5SKiXUHE3DjZ4VICBLMZaG0XN-CvbyaeNmJCcbSGv5J49eC6-C6ZNb9elkZWkVVkSzrvLo5XLKeqJFJkzLESGIJwgK_uUu59nniXIhpjH_itOUmhy3gbjuek6Y8TSlO-_xRqYprU9Z_4MbB3zZO-UyC1HeTmqlQOIuOvrsItViL2O1fnhf_50AR4RDA3GtZOKrllq98UPGi04pfNNhmMWkCRH3QrLJvoeK7RHHM=s200-no' alt='' width="100px" height="100px"/>
				<Styledp>I am currently looking for a job as a web developer in the Dallas area. Prior to studying web development, I worked in a few different industries—including the self-driving car and construction industries—that utilize software in unique ways. I experienced firsthand the impact of software development in the real world and became interested in pursuing a career in web development because of this experience. I graduate from DevMountain's Web Development Immersive course on March 1st and look forward to the continuing to learn and grow as a developer.</Styledp>
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
	font-family: 'Nunito', sans-serif;
	position: relative;
	top: -80px;
	color: #CCCECE;
	h1 {
		font-size: 30px;
		margin-bottom: 80px;
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
	color: #CCCECE;
	width: 50%;
	line-height: 1.75;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	@media (max-width: 645px){
		margin-top: 20px;
		text-align: center;
	}
`

export default About;
