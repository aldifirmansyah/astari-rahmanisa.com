import React from 'react';
import ThemeSwitch from './switch';
import LogoLight from '../../assets/images/logo/light.svg';
import LogoDark from '../../assets/images/logo/dark.svg';
import LightBurgerIcon from '../../assets/images/burger_menu/light.svg';
import DarkBurgerIcon from '../../assets/images/burger_menu/dark.svg';
import LightBurgerClose from '../../assets/images/burger_close/light.svg';
import DarkBurgerClose from '../../assets/images/burger_close/dark.svg';
import Image from '../Image';
import styled from 'styled-components';
import {Link, useHistory} from "react-router-dom";

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
  transition: 0.5s;
  transition-timing-function: linear;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 768px) {
    transition: 0.5s;
    transition-timing-function: linear;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${props => props.isMobileNavVisible ? null : 'transform: translateX(100%);'}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
`;

const UlWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-grow: 1;
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

const BurgerMenuWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: initial;
    flex-grow: 1;
    text-align: right;
  }
`;

const BurgerCloseWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: initial;
    text-align: right;
    margin-left: auto;
    padding: 1.5rem 2rem;
  }
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
  const [path, setPath] = React.useState('/');
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    return history.listen((location) => {
      closeNavigation();
      setPath(location.pathname);
    })
  },[history]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      closeNavigation();
    }, 500);

    return () => {
      clearTimeout(timer);
    }
  }, [props.isDarkMode])

  const openNavigation = () => {
    setIsNavigationOpen(true);
  }

  const closeNavigation = () => {
    setIsNavigationOpen(false);
  }

  return (
    <HeaderWrapper>
      <Link to='/'><Image src={props.isDarkMode ? LogoDark : LogoLight} alt='logo' width='40px' mobileWidth='24px'/></Link>
      <BurgerMenuWrapper onClick={openNavigation}><Image src={props.isDarkMode ? DarkBurgerIcon : LightBurgerIcon} width={'24px'}/></BurgerMenuWrapper>
      <NavWrapper isMobileNavVisible={isNavigationOpen} className='background-color'>
        <BurgerCloseWrapper onClick={closeNavigation}><Image src={props.isDarkMode ? DarkBurgerClose : LightBurgerClose} /></BurgerCloseWrapper>
        <UlWrapper>
          {header.map((item, idx) => (
            <NavItem key={idx} to={item.to} isActive={item.to === path}>
              {item.name}
            </NavItem>
          ))}
          <LiStyled>
            <ThemeSwitch isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode}/>
          </LiStyled>
        </UlWrapper>
        </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header;