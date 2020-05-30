import React from 'react';
import styled from 'styled-components';
import { DesktopTitle, MobileTitle } from'./title';
import data from './data';
import ImageWithSkeleton from '../ImageWithSkeleton';

const ArchivesContainer = styled.section`
width: 100%;
padding: 0; 
margin: 176px 0 176px 0;
@media (max-width: 768px) {
  margin: 88px 0 324px 0;
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media(max-width: 768px) {
    display: initial;
    position: absolute;
    left: 24px;
    right: 24px;
    width: auto;
    margin-top: 28px;
    overflow-x: scroll;
    white-space: nowrap;
  }
`;

const ArchiveWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 33%;
  @media (max-width: 768px) {
    display: inline-block;
    width: 60%;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Archives = () => {
  
  return (
    <ArchivesContainer>
      <MobileTitle/>
      <Wrapper>
        <DesktopTitle/>
        {data.map((item, idx) => {
          return (
            <ArchiveWrapper key={idx}>
              <ImageWithSkeleton src={item.photo} skeleton={item.skeleton} width='100%'/>
            </ArchiveWrapper>
          )
        })}
      </Wrapper>
    </ArchivesContainer>
  )
}

export default Archives;