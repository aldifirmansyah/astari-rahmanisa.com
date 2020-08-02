import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/seo';

import ImageWithSkeleton from '../../components/ImageWithSkeleton';

import Banner from '../../assets/images/tjetak_knowledge/banner/image.png';
import BannerSkeleton from '../../assets/images/tjetak_knowledge/banner/skeleton.png';

import { MainTitle, TitleStyled, H3Styled, ParagraphStyled, ListStyled, PrototypeLink, NextArticleLink } from '../../components/TextStyled';

const SubContainer = styled.div`
  margin: 160px 120px 80px 120px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const TjetakKnowledge = () => {
  return (
    <>
    <SubContainer>
      <SEO title='Tjetak Knowledge' />
      <MainTitle>Tjetak Knowledge</MainTitle>
      <ParagraphStyled>A dedicated Knowledge Management System for Tjetak</ParagraphStyled>

      <br/>
      <br/>

      <ImageWithSkeleton isBanner={true} src={Banner} skeleton={BannerSkeleton}/>

      <TitleStyled>About Tjetak Knowledge</TitleStyled>
      <ListStyled lineHeight='38px' data={['Work Type: College Project', 'Year: 2020', 'Tools: Figma', 'Role: UI/UX Designer', 'Teams: 4 Members (Astari D. Rahmanisa, Ananda Daffa, Deana A. Putri, Yuvitri Annisa D.)']}/>

      <TitleStyled>Background</TitleStyled>
      <ParagraphStyled>Currently, many companies still have some limitations in terms of knowledge management practices. Majorities of case studies I have read stated that the limitation is mostly due to knowledge that remains tacit and has not been documented yet. Thus, my team tried to analyze knowledge management practices in a certain company. Then, based on the analysis, we proposed a recommendation to enhance their knowledge management practices in the form of a Knowledge Management System design.</ParagraphStyled>
      <ParagraphStyled>In this project, we chose a case study of knowledge management practices in Tjetak. As a result, we designed a Knowledge Management System to help every employee of Tjetak to share their knowledge and learn from others.</ParagraphStyled>

      <TitleStyled>Problem Identification</TitleStyled>
      <ParagraphStyled>As I cannot publicly share the list of problems in detail, I would like to share how my team could identify the problems. My team had to <b>analyze problems</b> that were faced by Tjetak on their business processes <b>which the root cause was the lack of knowledge management practice</b> or the lack of knowledge transfer.</ParagraphStyled>

      <TitleStyled>Solution</TitleStyled>
      <ParagraphStyled>In order to come up with a solution, my team had to assess contingency factors in Tjetak to prioritize needed knowledge management processes. Here I attach the result which describes prioritized processes and features for each process.</ParagraphStyled>

      <TitleStyled>Interface Design <span role='img' aria-label='design'>🔮</span></TitleStyled>
      <ParagraphStyled>Tjetak Knowledge designed as a web-based system so that Tjetak employees can access the system easily. Members responsible for creating Tjetak Knowledge interface design and flow were me and my teammate, Deana, then we split the task based on features. I was responsible for creating the design system, interface design for Home Page, Discussion Forum, and Best Practice Database. However, we also collaborated in designing Login Page and About Company.</ParagraphStyled>

      <H3Styled>Login</H3Styled>
      <ParagraphStyled>Me and Deana were responsible for creating the Login Page. We did a little bit of exploration in designing the interface.</ParagraphStyled>
      
      <H3Styled>Home</H3Styled>
      
      <H3Styled>Discussion Forum</H3Styled>
      <ParagraphStyled>Here are some functionalities supported by Best Practice Database feature.</ParagraphStyled>
      <ListStyled lineHeight='260%' data={['Employee can manage (create, update, delete) their own topics in Discussion Forum.', 'Employee can manage (create, update, delete) their own comments in Discussion Forum.']}/>

      <H3Styled>Best Practice Database</H3Styled>
      <ParagraphStyled>Here are some functionalities supported by Best Practice Database feature.</ParagraphStyled>
      <ListStyled lineHeight='260%' data={['Employee can manage (create, update, delete) their own Best Practice.', 'Manager can approve or reject a Best Practice (before it appears on the system).']}/>

      <H3Styled>About Company</H3Styled>
      <ParagraphStyled>Here are some functionalities supported by About Company feature.</ParagraphStyled>
      <ListStyled lineHeight='260%' data={['Employee can read all company information.']}/>

      <TitleStyled>Prototype</TitleStyled>
      <PrototypeLink link='https://www.figma.com/proto/ViE44CHbdAPLNGgMzfEhjn/Tjetak-Knowledge?node-id=52%3A143&viewport=-2151%2C-1047%2C0.23472565412521362&scaling=min-zoom'>Try Tjetak Knowledge Prototype for Employee &#8594;</PrototypeLink>
      <PrototypeLink link='https://www.figma.com/proto/ViE44CHbdAPLNGgMzfEhjn/Tjetak-Knowledge?node-id=171%3A1666&viewport=283%2C147%2C0.11311198770999908&scaling=min-zoom'>Try Tjetak Knowledge Prototype for Manager &#8594;</PrototypeLink>
    
    </SubContainer>
    <NextArticleLink to='/about'>BogorSehat &#x25B8;</NextArticleLink>
    </>
  )
}

export default TjetakKnowledge;