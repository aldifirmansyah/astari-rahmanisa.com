import React from 'react';
import styled from 'styled-components';
import {TitleStyled} from '../../TextStyled';
import data from './data';
import Experience from './experience';

const Title = () => (<TitleStyled className='font-assistant'>Work Experiences</TitleStyled>)

const Wrapper = styled.section`
  margin: 48px 0 0 0;
`;

const WorkExperiences = () => (
  <Wrapper>
    <Title/>
    {data.map((item, idx) => (
      <Experience key={idx} experience={item}/>
    ))}
  </Wrapper>
)

export default WorkExperiences;