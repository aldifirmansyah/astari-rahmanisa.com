import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import LightLinkedin from '../../assets/images/linkedin/light.svg';
import DarkLinkedin from '../../assets/images/linkedin/dark.svg';
import LightBehance from '../../assets/images/behance/light.svg';
import DarkBehance from '../../assets/images/behance/dark.svg';
import LightVsco from '../../assets/images/vsco/light.svg';
import DarkVsco from '../../assets/images/vsco/dark.svg';

const LinkWrapper = styled.div`
  display: flex;
  margin: 28px 0 0 0;
  padding: 0;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  `;

const IconWrapper = styled.div`
  cursor: pointer;
  margin: 0 20px 0 0;
  padding: 0;
  &:last-child {
    margin-right: 0;
  }
`;

const Links = props => {
  function openLinkedin() {
    window.open('https://www.linkedin.com/in/astari-rahmanisa/', '_blank');
  }
  
  function  openBehance() {
    window.open('https://www.behance.net/astaridwir', '_blank');
  }
  
  function openVsco() {
    window.open('https://vsco.co/astarrri/gallery', '_blank');
  }

  return (
  <LinkWrapper>
    <IconWrapper onClick={openLinkedin}>
      <Image src={props.isDarkMode ? DarkLinkedin : LightLinkedin} width='24px'/>
    </IconWrapper>
    <IconWrapper onClick={openBehance}>
      <Image src={props.isDarkMode ? DarkBehance : LightBehance} width='24px'/>
    </IconWrapper>
    <IconWrapper onClick={openVsco}>
      <Image src={props.isDarkMode ? DarkVsco : LightVsco} width='24px'/>
    </IconWrapper>
  </LinkWrapper>
  )
}

export default Links;