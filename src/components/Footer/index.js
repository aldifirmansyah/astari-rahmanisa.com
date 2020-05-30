import React from 'react';
import Styled from 'styled-components';
import Image from '../Image';
import LightEmail from '../../assets/images/email/light.png';
import DarkEmail from '../../assets/images/email/dark.png';

const FooterWrapper = Styled.footer`
margin: 0;
padding: 0;
`;

const Line = Styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 0;
`;

const ContentWrapper = Styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EmailWrapper = Styled.div`
  height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    height: 12px;
  }
`;

const DesktopOnlySpan = Styled.span`
  margin-left: 4px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Footer = props => {
  const year = '2020';

  return (
    <FooterWrapper>
      <Line style={{border: `0.4px solid ${'#6B6E8C'}`}}/>
      <ContentWrapper>
        <p>&copy; {year} Astari Dwi Rahmanisa</p>
        <EmailWrapper>
          <Image src={props.isDarkMode ? DarkEmail : LightEmail} height='100%'/>
          <DesktopOnlySpan>Astari Dwi Rahmanisa</DesktopOnlySpan>
        </EmailWrapper>
      </ContentWrapper>
    </FooterWrapper>
  )
}

export default Footer;