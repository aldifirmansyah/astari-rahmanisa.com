import React from 'react'
import styled from 'styled-components'
import ImageWithSkeleton from '../ImageWithSkeleton'

const CardWrapper = styled.div`
  width: 49%;
  margin-top: 56px;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 32px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 12px 0 0 0;
  padding: 0;
`;

const StyledParagraph = styled.p`
  margin: 12px 0 0 0;
  padding: 0;
  font-weight: lighter;
  text-align: justify;
  text-overflow: ellipsis;
  word-wrap: break-word;
  line-height: 140%;
  max-height: 2.8rem;
  overflow: hidden;
`;


const Description = props => (
  <StyledParagraph className='color-secondary'>{props.children}</StyledParagraph>
)

const Card = ({thumbnail}) => {
  return (
    <CardWrapper onClick={() => { window.location.href=thumbnail.to }}>
      <ImageWithSkeleton width='100%' src={thumbnail.photo} skeleton={thumbnail.skeleton} useHover={true}/>
      <Title className='font-assistant'>{thumbnail.title}</Title>
      <Description>{thumbnail.description}</Description>
      <Description>{thumbnail.createdDate}</Description>
    </CardWrapper>
  )
}

export default Card;