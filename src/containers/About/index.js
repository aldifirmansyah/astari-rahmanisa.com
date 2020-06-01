import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/seo';
import ProfilePicture from '../../components/ProfilePicture';
import AboutMe from '../../components/AboutContent/AboutMe';
import WorkExperiences from '../../components/AboutContent/WorkExperiences';

const SubContainer = styled.div`
  margin: 0 120px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const About = () => {
  return (
    <SubContainer>
    <SEO title='About'/>
    <ProfilePicture/>
    <AboutMe/>
    <WorkExperiences/>
    </SubContainer>
  )
}

export default About;