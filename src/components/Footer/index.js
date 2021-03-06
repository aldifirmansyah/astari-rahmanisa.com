import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import LightEmail from '../../assets/images/email/light.svg';
import DarkEmail from '../../assets/images/email/dark.svg';

const FooterWrapper = styled.footer`
margin: 0;
padding: 0;
`;

const Line = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 0;
`;

const ContentWrapper = styled.div`
  margin: 32px 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin: 14px 0;
  }
`;

const EmailWrapper = styled.a`
  text-decoration: none;
  height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    height: 12px;
  }
`;

const DesktopOnlySpan = styled.span`
  margin-left: 4px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Footer = props => {
  const year = '2020';

  return (
    <FooterWrapper>
      <Line style={{border: `0.4px solid`}} className='color-secondary'/>
      <ContentWrapper>
        <p className='color-secondary' style={{padding: 0, margin: 0}}>&copy; {year} Astari Dwi Rahmanisa</p>
        <EmailWrapper href="mailto: astaridwir@gmail.com" className='color-primary'>
          <Image src={props.isDarkMode ? DarkEmail : LightEmail} height='100%'/>
          <DesktopOnlySpan className='color-secondary'>astaridwir@gmail.com</DesktopOnlySpan>
        </EmailWrapper>
      </ContentWrapper>
    </FooterWrapper>
  )
}

export default Footer;