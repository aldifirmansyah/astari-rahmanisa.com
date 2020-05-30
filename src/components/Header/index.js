import React from 'react';
import ThemeSwitch from './switch';
import LogoLight from '../../assets/images/logo/light.svg';
import LogoDark from '../../assets/images/logo/dark.svg';
import Image from '../Image';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import DarkModeContext from '../../hooks/DarkModeContext';

const HeaderWrapper = styled.header`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    height: 56px;
  }
`;

const NavWrapper = styled.nav`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const UlWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 48px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const LiStyled = styled.li`
  margin-right: 3rem;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const header = [
  {
    to: '/',
    name: 'Work'
  },
  {
    to: '/about',
    name: 'About'
  }
];

const NavItem = props => (
  <LiStyled>
    <LinkStyled to={props.to} className={props.isActive ? 'active-header' : 'color-primary'}>{props.children}</LinkStyled>
  </LiStyled>
)

const Header = props => {
  const {IsDarkMode} = React.useContext(DarkModeContext);
  const path = window.location.pathname;

  return (
    <HeaderWrapper>
      <Link to='/'><Image src={IsDarkMode ? LogoDark : LogoLight} alt='logo' width='40px' mobileWidth='24px'/></Link>
      <NavWrapper>
        <UlWrapper>
          {header.map((item, idx) => (
            <NavItem key={idx} to={item.to} isActive={item.to === path}>
              {item.name}
            </NavItem>
          ))}
          <LiStyled>
            <ThemeSwitch/>
          </LiStyled>
        </UlWrapper>
        </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header;