import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/seo';

import ImageWithSkeleton from '../../components/ImageWithSkeleton';

import Banner from '../../assets/images/bogorsehat/banner/image.png';
import BannerSkeleton from '../../assets/images/bogorsehat/banner/skeleton.png';

import { MainTitle, MainTitleParagraph, TitleStyled, SubTitle, ParagraphStyled, ListStyled, PrototypeLink, OtherArticleLink } from '../../components/TextStyled';

const SubContainer = styled.div`
  margin: 160px 120px 80px 120px;
  @media (max-width: 768px) {
    margin: 0;
    padding-top: 96px;
  }
`;

const Bogorsehat = () => {
  return (
    <>
    <SubContainer>
      <SEO title='BogorSehat' />
      <MainTitle>BogorSehat</MainTitle>
      <MainTitleParagraph>A mobile health application for citizen of Bogor, Indonesia</MainTitleParagraph>

      <br/>
      <br/>

      <ImageWithSkeleton isBanner={true} src={Banner} skeleton={BannerSkeleton}/>

      <TitleStyled>About BogorSehat</TitleStyled>
      <ListStyled lineHeight='38px' data={['Work Type: College Project', 'Year: 2019', 'Tools: Figma', 'Role: UI/UX Designer', 'Teams: 5 Members (Astari D. Rahmanisa, Aldi Firmansyah, Athifa Michel, Deana A. Putri, Hauri S. Zafirah)']}/>

      <TitleStyled>Background</TitleStyled>
      <ParagraphStyled>Tjetak Knowledge is a Knowledge Management System designed for the entire company of Tjetak. Currently, Tjetak has several knowledges that remain tacit and have not been documented yet. In terms of sharing documents for each business unit, Tjetak had already used a team collaboration tools. However, Tjetak does not have a dedicated place for its employee to share their knowledge and experience. Thus, there is a need to develop a Knowledge Management System to help every employee of Tjetak to share their knowledge and learn from others.</ParagraphStyled>

      <TitleStyled>Problem Identification</TitleStyled>
      <ParagraphStyled>As I cannot publicly share the list of problems in detail, I would like to share how my team could identify the problems. My team had to <b>analyze problems</b> that were faced by Tjetak on their business processes <b>which the root cause was the lack of knowledge management practice</b> or the lack of knowledge transfer.</ParagraphStyled>

      <TitleStyled>Solution</TitleStyled>
      <ParagraphStyled>In order to come up with a solution, my team had to assess contingency factors in Tjetak to prioritize needed knowledge management processes. Here I attach the result which describes prioritized processes and features for each process.</ParagraphStyled>

      <TitleStyled>Moodboard</TitleStyled>

      <TitleStyled>Mini Design System</TitleStyled>

      <TitleStyled>Interface Design <span role='img' aria-label='design'>🔮</span></TitleStyled>
      <ParagraphStyled>BogorSehat designed as a mobile application so that the user can easily access the app whenever and wherever they needed to. All members of the team were responsible for creating BogorSehat interface design and flow, then, we split the task based on features. I was responsible for creating the design system, interface design for Home Page, Booking, and collaborated with Hauri in designing Article. Besides that, I was also responsible for creating animation and prototype for the application.</ParagraphStyled>

      <SubTitle>Home</SubTitle>
      <ParagraphStyled>Through Home Page, users can access every feature provided in BogorSehat. I also created a shortcut to access 3 nearest health facilities and shortcuts to read an article about each disease trend in Bogor. I got all of the illustrations from Flaticon credits to the author.</ParagraphStyled>

      <SubTitle>Booking</SubTitle>
      <ParagraphStyled>Here are some functionalities supported by Booking feature.</ParagraphStyled>
      <ListStyled lineHeight='260%' data={['User can manage (create, update, delete) their own appointment in Booking.', 'User can search facilities, policlinic, or doctor by keywords.']}/>

      <TitleStyled>Article</TitleStyled>
      <ParagraphStyled>Here are some functionalities supported by article feature.</ParagraphStyled>
      <ListStyled lineHeight='260%' data={['User can read article about any diseases.']}/>
      
      <TitleStyled>Prototype</TitleStyled>
      <PrototypeLink link='https://bit.ly/BogorSehatPrototype'>Try BogorSehat Prototype &#8594;</PrototypeLink>

    </SubContainer>
    {/* <OtherArticleLink previousLink='/tjetak-knowledge' previousText='&#x25C2; Tjetak Knowledge'/> */}
    </>
  )
}

export default Bogorsehat;