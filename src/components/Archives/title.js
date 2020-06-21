import React from 'react';
import styled from 'styled-components';

const DesktopTitleWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    display: none
  }
`;

const MobileTitleWrapper = styled.div`
display: none;
padding: 0;
margin: 0;
width: 100%;
flex-direction: column;
justify-content: center;
@media (max-width: 768px) {
  display: initial;
}
`;

const Heading = styled.h2`
  font-size: 36px;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 24px;
  } 
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;

const DesktopTitle = () => {
  return (
    <DesktopTitleWrapper>
      <div>
        <Heading className='font-assistant'>Archives</Heading>
        <Paragraph>Other example of my work <span role='img' aria-label='art'>🎨</span></Paragraph>
      </div>
    </DesktopTitleWrapper>
  )
}

const MobileTitle = () => {
  return (
    <MobileTitleWrapper>
      <div>
        <Heading className='font-assistant'>Archives</Heading>
        <Paragraph>Other example of my work <span role='img' aria-label='art'>🎨</span></Paragraph>
      </div>
    </MobileTitleWrapper>
  )
}

export { DesktopTitle, MobileTitle };