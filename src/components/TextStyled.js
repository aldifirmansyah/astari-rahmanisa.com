import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const H1Styled = styled.h1`
  font-size: 48px;
  line-height: 48px;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const MainTitle = ({children}) => <H1Styled className='font-assistant'>
                                    {children}</H1Styled>;

const MainTitleParagraph = styled.p`
  font-size: 14px;
  line-height: 19px;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 180%;
  }
`;

const H2Styled = styled.h2`
  margin-top: 48px;
  font-size: 24px;
  line-height: 31px;
  @media (max-width: 768px) {
    margin-top: 28px;
    font-size: 16px;
    line-height: 21px;
  }
`;

const TitleStyled = ({children}) => <H2Styled className='font-assistant'>{children}</H2Styled>

const H3Styled = styled.h3`
  margin-top: 48px;
  font-size: 20px;
  line-height: 26px;
  @media (max-width: 768px) {
    margin-top: 28px;
    font-size: 14px;
    line-height: 180%;
  }
`;

const SubTitle = ({children}) => <H3Styled className='font-assistant'>{children}</H3Styled>

const ParagraphStyled = styled.p`
  font-size: 16px;
  text-align: justify;
  line-height: 180%;
  font-weight: lighter;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ListStyled = props => {
  const lineHeigth = props.lineHeight ? props.lineHeight : '180%';
  return (
  <ul style={{lineHeight: lineHeigth}}>
    {props.data.map((row, idx) => <li key={idx}><ParagraphStyled>{row}</ParagraphStyled></li>)}
  </ul>
  )
}

const ParagraphAsLink = styled.p`
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 26px;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const LinkExternal = props => <ParagraphAsLink className='active-header' onClick={props.onClick}>{props.children}</ParagraphAsLink>

const PrototypeLink = props => {
  function openLink() {
    window.open(props.link, '_blank');
  }

  return <LinkExternal onClick={openLink}>{props.children}</LinkExternal>
}

const OtherArticleLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 176px;
  @media (max-width: 768px) {
    margin-bottom: 88px;
  }
`;

const OtherArticleLink = props => {
  return (
    <OtherArticleLinkWrapper>
      <div>
        {props.previousLink && props.previousText && <Link style={{textDecoration: 'none'}} className='color-primary' to={props.previousLink}><TitleStyled>{props.previousText}</TitleStyled></Link>}
      </div>
      <div>
        {props.nextLink && props.nextText && <Link style={{textDecoration: 'none'}} className='color-primary' to={props.nextLink}><TitleStyled>{props.nextText}</TitleStyled></Link>}
      </div>
    </OtherArticleLinkWrapper>
  )
}

const PForImage = styled.p`
  margin: 12px 0 0 0;
  padding: 0;
  text-align: center;
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const ImageName = ({children}) => (
  <PForImage className='color-secondary'>{children}</PForImage>
)

export {MainTitle, MainTitleParagraph, TitleStyled, SubTitle, ParagraphStyled, ListStyled, PrototypeLink, OtherArticleLink, ImageName}