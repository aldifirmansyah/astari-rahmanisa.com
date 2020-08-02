import React from 'react';
import styled from 'styled-components';
import {TitleStyled, ParagraphStyled} from '../../TextStyled';

const AboutMeWrapper = styled.section`
  margin: 80px 0 0 0;
`;

const Title = () => (<TitleStyled>About Me</TitleStyled>)

const DescriptionText = `Hello again! My name is Astari Dwi Rahmanisa, a UI/UX Designer from Indonesia. 
Currently, I am in my final year as an undergraduate student of Information System at Faculty of Computer Science, 
Universitas Indonesia. Throughout my experience as a designer, I have collaborated with talented and passionate people 
to deliver an appealing yet easy to use products. Most recently, I worked on digital product which related to online grocery shopping.`;
const Description = () => (<ParagraphStyled>{DescriptionText}</ParagraphStyled>)

const SpanAsLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Link = props => <SpanAsLink className='active-header' onClick={props.onClick}>{props.children}</SpanAsLink>

const Linkedin = () => {
  function openLinkedin() {
    window.open('https://www.linkedin.com/in/astari-rahmanisa/', '_blank');
  }
  return <Link onClick={openLinkedin}>Linkedin</Link>
}
const Behance = () => {
  function  openBehance() {
    window.open('https://www.behance.net/astaridwir', '_blank');
  }
  return <Link onClick={openBehance}>Behance</Link>
}

const Email = props => <a className='active-header' href='mailto: astaridwir@gmail.com'>astaridwir@gmail.com</a>

const Contacts = () => <ParagraphStyled>You can find me on <Linkedin/>, <Behance/>, or reach me out via email <Email/>.</ParagraphStyled>

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <Title/>
      <Description/>
      <Contacts/>
    </AboutMeWrapper>
  )
}

export default AboutMe;