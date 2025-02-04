import React, { useState } from 'react';
import { HeaderContainer, Logo, Nav, MenuButton } from './Header.styled';
import LogoImage from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <div className="container">
        <Logo>
          <img src={LogoImage} alt="Logo" />
        </Logo>
        <MenuButton onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </MenuButton>
        <Nav isOpen={isOpen}>
          {/* <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul> */}
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
