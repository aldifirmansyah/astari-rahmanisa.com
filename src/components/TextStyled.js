import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const MainTitle = ({children}) => <h1 className='font-assistant'
                                  style={{fontSize: '48px', lineHeight: '48px', margin: '0', padding: '0'}}>
                                    {children}</h1>;

const TitleStyled = styled.h2`
  font-size: 24px;
  line-height: 31px;
`;

const H3Styled = styled.h3`
  font-size: 20px;
  line-height: 26px;
`;

const ParagraphStyled = styled.p`
  text-align: justify;
  line-height: 180%;
  font-weight: lighter;
`;

const ListStyled = props => {
  const lineHeigth = props.lineHeight ? props.lineHeight : '180%';
  return (
  <ul style={{lineHeight: lineHeigth}}>
    {props.data.map((row, idx) => <li key={idx}>{row}</li>)}
  </ul>
  )
}

const ParagraphAsLink = styled.p`
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 26px;
`;

const LinkExternal = props => <ParagraphAsLink className='active-header' onClick={props.onClick}>{props.children}</ParagraphAsLink>

const PrototypeLink = props => {
  function openLink() {
    window.open(props.link, '_blank');
  }

  return <LinkExternal onClick={openLink}>{props.children}</LinkExternal>
}

const NextArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 176px;
`;

const NextArticleLink = props => {
  return (
    <NextArticleWrapper>
      <Link style={{textDecoration: 'none'}} className='color-primary' to={props.to}><TitleStyled>{props.children}</TitleStyled></Link>
    </NextArticleWrapper>
  )
}

export {MainTitle, TitleStyled, H3Styled, ParagraphStyled, ListStyled, PrototypeLink, NextArticleLink}