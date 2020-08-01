import React from 'react';
import styled from 'styled-components';
import {ParagraphStyled} from '../../TextStyled';

const Wrapper = styled.div`
  margin: 40px 0 0 0;
  &:nth-child(2) {
    margin-top: 28px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  margin: 0;
`;

const Date = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: lighter;
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