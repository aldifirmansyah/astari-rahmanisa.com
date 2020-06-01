import React from 'react';
import styled from 'styled-components';
import {ParagraphStyled} from '../TextStyled';

const Wrapper = styled.div`
  margin: 40px 0 0 0;
  &:nth-child(2) {
    margin-top: 28px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const Date = styled.p`
  font-size: 12px;
  font-weight: lighter;
  margin: 4px 0 0 0;
`;

const Experience = ({experience}) => (
  <Wrapper>
    <Title>{experience.title}</Title>
    <Date>{experience.date}</Date>
    {experience.contents.map((item, idx) => (
      <ParagraphStyled style={{margin: '12px 0 0 0'}} key={idx}>{item}</ParagraphStyled>
    ))}
  </Wrapper>
)

export default Experience;