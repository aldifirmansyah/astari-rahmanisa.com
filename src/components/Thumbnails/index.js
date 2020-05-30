import React from 'react';
import styled from 'styled-components';
import Card from './card';
import data from './data';

const ThumbnailsContainer = styled.section`
  width: 100%;
  padding: 0;
  margin: 120px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;



const Thumbnails = () => {
  return (
  <ThumbnailsContainer>
    {data.map((item, idx) => (
      <Card key={idx} thumbnail={item}></Card>
      )
    )}
  </ThumbnailsContainer>
  )
}

export default Thumbnails;