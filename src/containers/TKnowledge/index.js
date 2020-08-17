import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/seo';

import ImageWithSkeleton from '../../components/ImageWithSkeleton';
import Image from '../../components/Image';

import Banner from '../../assets/images/t_knowledge/banner/image.png';
import BannerSkeleton from '../../assets/images/t_knowledge/banner/skeleton.png';

import TableFeatures from '../../assets/images/t_knowledge/images/table-features.jpg';
import TableFeaturesSkeleton from '../../assets/images/t_knowledge/images/table-features_skeleton.jpg';
import Moodboard from '../../assets/images/t_knowledge/images/moodboard.jpg';
import MoodboardSkeleton from '../../assets/images/t_knowledge/images/moodboard_skeleton.jpg';
import MiniDesignSystem from '../../assets/images/t_knowledge/images/mini-design-system.jpg';
import MiniDesignSystemSkeleton from '../../assets/images/t_knowledge/images/mini-design-system_skeleton.jpg';
import LoginExploration from '../../assets/images/t_knowledge/images/login-exploration.jpg';
import LoginExplorationSkeleton from '../../assets/images/t_knowledge/images/login-exploration_skeleton.jpg';
import LoginFinal from '../../assets/images/t_knowledge/images/login-final.jpg';
import LoginFinalSkeleton from '../../assets/images/t_knowledge/images/login-final_skeleton.jpg';
import HomeAnimation from '../../assets/images/t_knowledge/gifs/home-animation.gif';
import DiscussionForum from '../../assets/images/t_knowledge/images/discussion-forum.jpg';
import DiscussionForumSkeleton from '../../assets/images/t_knowledge/images/discussion-forum_skeleton.jpg';
import BestPractice from '../../assets/images/t_knowledge/images/best-practice.jpg';
import BestPracticeSkeleton from '../../assets/images/t_knowledge/images/best-practice_skeleton.jpg';
import AboutCompanyAnimation from '../../assets/images/t_knowledge/gifs/about-company-animation.gif';

import { MainTitle, MainTitleParagraph, TitleStyled, SubTitle, ParagraphStyled, ListStyled, PrototypeLink, OtherArticleLink, ImageName } from '../../components/TextStyled';

const SubContainer = styled.div`
  margin: 160px 120px 80px 120px;
  @media (max-width: 768px) {
    margin: 0;
    padding-top: 96px;
  }
`;

const TKnowledge = () => {
  return (
    <>
    <SubContainer>
      <SEO title='T Industries Knowledge' />
      <MainTitle>T Industries Knowledge</MainTitle>
      <MainTitleParagraph>A dedicated Knowledge Management System for T Industries</MainTitleParagraph>

      <br/>
      <br/>

      <ImageWithSkeleton isBanner={true} src={Banner} skeleton={BannerSkeleton}/>

      <TitleStyled>About T Industries Knowledge</TitleStyled>
      <ListStyled lineHeight='38px' data={['Work Type: College Project', 'Year: 2020', 'Tools: Figma', 'Role: UI/UX Designer', 'Teams: 4 Members (Astari D. Rahmanisa, Ananda Daffa, Deana A. Putri, Yuvitri Annisa D.)']}/>

      <TitleStyled>Background</TitleStyled>
      <ParagraphStyled>Currently, many companies still have some limitations in terms of knowledge management practices. Majorities of case studies I have read stated that the limitation is mostly due to knowledge that remains tacit and has not been documented yet. Thus, my team tried to analyze knowledge management practices in a certain company. Then, based on the analysis, we proposed a recommendation to enhance their knowledge management practices in the form of a Knowledge Management System design.</ParagraphStyled>
      <ParagraphStyled>In this project, we chose a case study of knowledge management practices in T Industries. As a result, we designed a Knowledge Management System to help every employee of T Industries to share their knowledge and learn from others.</ParagraphStyled>

      <TitleStyled>Problem Identification</TitleStyled>
      <ParagraphStyled>As I cannot publicly share the list of problems in detail, I would like to share how my team could identify the problems. My team had to <b>analyze problems</b> that were faced by T Industries on their business processes <b>which the root cause was the lack of knowledge management practice</b> or the lack of knowledge transfer.</ParagraphStyled>

      <TitleStyled>Solution</TitleStyled>
      <ParagraphStyled>In order to come up with a solution, my team had to assess contingency factors in T Industries to prioritize needed knowledge management processes. Here I attach the result which describes prioritized processes and features for each process.</ParagraphStyled>
      <ImageWithSkeleton src={TableFeatures} skeleton={TableFeaturesSkeleton} width='100%'/>
      <ImageName>List of Processes and Features</ImageName>

      <TitleStyled>Moodboard</TitleStyled>
      <ImageWithSkeleton src={Moodboard} skeleton={MoodboardSkeleton} width='100%'/>
      <ImageName>Moodboard</ImageName>

      <TitleStyled>Mini Design System</TitleStyled>
      <ImageWithSkeleton src={MiniDesignSystem} skeleton={MiniDesignSystemSkeleton} width='100%'/>
      <ImageName>Mini Design System</ImageName>

      <TitleStyled>Interface Design <span role='img' aria-label='design'>🔮</span></TitleStyled>
      <ParagraphStyled>T Industries Knowledge designed as a web-based system so that T Industries employees can access the system easily. Members responsible for creating T Industries Knowledge interface design and flow were me and my teammate, Deana, then we split the task based on features. I was responsible for creating the design system, interface design for Home Page, Discussion Forum, and Best Practice Database. However, we also collaborated in designing Login Page and About Company.</ParagraphStyled>

      <SubTitle>Login</SubTitle>
      <ParagraphStyled>Me and Deana were responsible for creating the Login Page. We did a little bit of exploration in designing the interface.</ParagraphStyled>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',padding: 0, margin: 0}}>
        <div style={{margin: 0, padding: 0, width: '49%'}}>
          <ImageWithSkeleton src={LoginExploration} skeleton={LoginExplorationSkeleton} width='100%'/>
          <ImageName>Login Page Exploration</ImageName>
        </div>
        <div style={{margin: 0, padding: 0, width: '49%'}}>
          <ImageWithSkeleton src={LoginFinal} skeleton={LoginFinalSkeleton} width='100%'/>
          <ImageName>Final Login Page</ImageName>
        </div>
      </div>
      
      <SubTitle>Home</SubTitle>
      <Image src={HomeAnimation} width='100%'/>
      <ImageName>Home Page</ImageName>
      
      <SubTitle>Discussion Forum</SubTitle>
      <ParagraphStyled>Here are some functionalities supported by Best Practice Database feature.</ParagraphStyled>
      <ListStyled lineHeight='260%' data={['Employee can manage (create, update, delete) their own topics in Discussion Forum.', 'Employee can manage (create, update, delete) their own comments in Discussion Forum.']}/>
      <ImageWithSkeleton src={DiscussionForum} skeleton={DiscussionForumSkeleton} width='100%'/>
      <ImageName>Discussion Forum</ImageName>

      <SubTitle>Best Practice Database</SubTitle>
      <ParagraphStyled>Here are some functionalities supported by Best Practice Database feature.</ParagraphStyled>
      <ListStyled lineHeight='260%' data={['Employee can manage (create, update, delete) their own Best Practice.', 'Manager can approve or reject a Best Practice (before it appears on the system).']}/>
      <ImageWithSkeleton src={BestPractice} skeleton={BestPracticeSkeleton} width='100%'/>
      <ImageName>Best Practice Database</ImageName>

      <SubTitle>About Company</SubTitle>
      <ParagraphStyled>Here are some functionalities supported by About Company feature.</ParagraphStyled>
      <ListStyled lineHeight='260%' data={['Employee can read all company information.']}/>
      <Image src={AboutCompanyAnimation} width='100%'/>
      <ImageName>About Company</ImageName>

      <TitleStyled>Prototype</TitleStyled>
      <PrototypeLink link='https://www.figma.com/proto/ViE44CHbdAPLNGgMzfEhjn/T-Knowledge?node-id=52%3A143&viewport=-2151%2C-1047%2C0.23472565412521362&scaling=min-zoom'>Try T Industries Knowledge Prototype for Employee &#8594;</PrototypeLink>
      <PrototypeLink link='https://www.figma.com/proto/ViE44CHbdAPLNGgMzfEhjn/T-Knowledge?node-id=171%3A1666&viewport=283%2C147%2C0.11311198770999908&scaling=min-zoom'>Try T Industries Knowledge Prototype for Manager &#8594;</PrototypeLink>
    
    </SubContainer>
    <OtherArticleLink nextLink='/bogorsehat' nextText='BogorSehat &#x25B8;'/>
    </>
  )
}

export default TKnowledge;