import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const clickToScroll = (e) => {
    document.getElementById(e.target.name).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Nav>
        <Links>
          <Button name="about" onClick={clickToScroll}>
            About
          </Button>
          <Button name="skills" onClick={clickToScroll}>
            Skills
          </Button>
          <Button name="projects" onClick={clickToScroll}>
            Projects
          </Button>
          <Button name="contact" onClick={clickToScroll}>
            Contact
          </Button>
        </Links>
      </Nav>
      <SmallNav>
        <SmallNavLinks showMenu={showMenu}>
          <Button name="about" onClick={clickToScroll}>
            About
          </Button>
          <Button name="skills" onClick={clickToScroll}>
            Skills
          </Button>
          <Button name="projects" onClick={clickToScroll}>
            Projects
          </Button>
          <Button name="contact" onClick={clickToScroll}>
            Contact
          </Button>
          <Button onClick={toggleMenu}>X</Button>
        </SmallNavLinks>
        <Burger showMenu={showMenu} onClick={toggleMenu}>
          <i class="material-icons">menu</i>
        </Burger>
      </SmallNav>
    </>
  );
};

const SmallNav = styled.div`
  display: none;
  background: rgba(1, 0, 9, 100);
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0vh;
  height: 80px;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  z-index: 1000;
  @media (max-width: 1050px) {
    display: flex;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Burger = styled.div`
	display: none;
	color:  #FFFFFF;
	cursor: pointer
	margin-right: 10px;
	@media (max-width: 1050px) {
		display: ${(props) => (props.showMenu ? "none" : "flex")};
	}
	@media (max-width: 700px) {
		display: none;
	}
	i {
		font-size: 40px;
	}
`;

const SmallNavLinks = styled.div`
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  justify-content: space-evenly;
  flex-direction: row;
  width: 300px;
`;

const Nav = styled.div`
  background: rgba(1, 0, 9, 100);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0vh;
  height: 80px;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  z-index: 1000;
  @media (max-width: 1050px) {
    display: none;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  width: 400px;
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
`;
const shake = keyframes`
25% {
	transform: rotate(6deg);
}

50% {
	transform: rotate(0deg);
}

75% {
	transform: rotate(-6deg);
}

100% {
	transform: rotate(0deg);
}
`;

const Button = styled.button`
  color: #ffffff;
  :hover {
    -webkit-animation: ${shake} 0.4s infinite;
    animation: ${shake} 0.4s linear;
    cursor: pointer;
  }
`;

export default Header;
