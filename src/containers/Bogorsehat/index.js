import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/seo';

import ImageWithSkeleton from '../../components/ImageWithSkeleton';
import Image from '../../components/Image';

import Banner from '../../assets/images/bogorsehat/banner/image.png';
import BannerSkeleton from '../../assets/images/bogorsehat/banner/skeleton.png';
import HomeAnimation from '../../assets/images/bogorsehat/gifs/home-animation.gif';
import MiniDesignSystemLight from '../../assets/images/bogorsehat/images/mini-design-system-light.png';
import MiniDesignSystemLightSkeleton from '../../assets/images/bogorsehat/images/mini-design-system-light_skeleton.png';
import MiniDesignSystemDark from '../../assets/images/bogorsehat/images/mini-design-system-dark.png';
import MiniDesignSystemDarkSkeleton from '../../assets/images/bogorsehat/images/mini-design-system-dark_skeleton.png';
import Booking from '../../assets/images/bogorsehat/images/booking.jpg';
import BookingSkeleton from '../../assets/images/bogorsehat/images/booking_skeleton.jpg';
import Article from '../../assets/images/bogorsehat/images/article.jpg';
import ArticleSkeleton from '../../assets/images/bogorsehat/images/article_skeleton.jpg';

import { MainTitle, MainTitleParagraph, TitleStyled, SubTitle, ParagraphStyled, ListStyled, PrototypeLink, ImageName, OtherArticleLink } from '../../components/TextStyled';

const SubContainer = styled.div`
  margin: 160px 120px 80px 120px;
  @media (max-width: 768px) {
    margin: 0;
    padding-top: 96px;
  }
`;

const Bogorsehat = ({ isDarkMode }) => {
  const MiniDesignSystem = isDarkMode ? MiniDesignSystemDark : MiniDesignSystemLight;
  const MiniDesignSystemSkeleton = isDarkMode ? MiniDesignSystemDarkSkeleton : MiniDesignSystemLightSkeleton;
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
      <ParagraphStyled>Indonesian Ministry of Health claims that the level of awareness in Indonesian people regarding health and hygiene is still considered low, especially in the rural areas (Ucu, 2019). Based on data from the AIA Healthy Living Index (2018), only around 49% of Indonesians undergo health checks. This means that half of Indonesians are not aware of the importance of health checks.</ParagraphStyled>

      <TitleStyled>Problem Identification</TitleStyled>
      <ParagraphStyled>Our team identified that most people in our surroundings (friends, family, etc) felt that undergo a health check is frustrating due to its long waiting list. As for now, we also live in the technology era, so people expect that they can book doctors throughout their mobile phones to prevent the waiting list. Unfortunately, only a few health facilities in Indonesia that provide online booking.</ParagraphStyled>

      <TitleStyled>Solution</TitleStyled>
      <ParagraphStyled>Referring to the background and problem previously described, BogorSehat was designed with the aim of facilitating Indonesian people's access to simple health checks. We also wanted to take part in helping the Ministry of Health increase the awareness of Indonesian's the importance of health checks as a preventive measure, helping to increase awareness of the Indonesian regarding health. Therefore, we chose a niche location first, which is Bogor, so that the impact can be easily assessed. We chose Bogor since it already make use of technology such as mobile application for their public services.</ParagraphStyled>

      <TitleStyled>Mini Design System</TitleStyled>
      <ImageWithSkeleton src={MiniDesignSystem} skeleton={MiniDesignSystemSkeleton} width='100%'/>
      <ImageName>Mini Design System</ImageName>

      <TitleStyled>Interface Design <span role='img' aria-label='design'>🔮</span></TitleStyled>
      <ParagraphStyled>BogorSehat designed as a mobile application so that the user can easily access the app whenever and wherever they needed to. All members of the team were responsible for creating BogorSehat interface design and flow, then, we split the task based on features. I was responsible for creating the design system, interface design for Home Page, Booking, and collaborated with Hauri in designing Article. Besides that, I was also responsible for creating animation and prototype for the application.</ParagraphStyled>

      <SubTitle>Home</SubTitle>
      <ParagraphStyled>Through Home Page, users can access every feature provided in BogorSehat. I also created a shortcut to access 3 nearest health facilities and shortcuts to read an article about each disease trend in Bogor. I got all of the illustrations from Flaticon credits to the author.</ParagraphStyled>
      <Image src={HomeAnimation} width='100%'/>
      <ImageName>Home Page Animation</ImageName>

      <SubTitle>Booking</SubTitle>
      <ParagraphStyled>Here are some functionalities supported by Booking feature.</ParagraphStyled>
      <ListStyled lineHeight='260%' data={['User can manage (create, update, delete) their own appointment in Booking.', 'User can search facilities, policlinic, or doctor by keywords.']}/>
      <ImageWithSkeleton src={Booking} skeleton={BookingSkeleton} width='100%'/>
      <ImageName>Booking</ImageName>

      <TitleStyled>Article</TitleStyled>
      <ParagraphStyled>Here are some functionalities supported by article feature.</ParagraphStyled>
      <ListStyled lineHeight='260%' data={['User can read article about any diseases.']}/>
      <ImageWithSkeleton src={Article} skeleton={ArticleSkeleton} width='100%'/>
      <ImageName>Article</ImageName>
      
      <TitleStyled>Prototype</TitleStyled>
      <PrototypeLink link='https://bit.ly/BogorSehatPrototype'>Try BogorSehat Prototype &#8594;</PrototypeLink>

    </SubContainer>
    <OtherArticleLink previousLink='/t-knowledge' previousText='&#x25C2; T Industries Knowledge'/>
    </>
  )
}

export default Bogorsehat;