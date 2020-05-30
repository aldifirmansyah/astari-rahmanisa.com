import React from 'react'
import styled from 'styled-components'
import ImageWithSkeleton from '../ImageWithSkeleton'

const CardWrapper = styled.div`
  width: 49%;
  margin-top: 56px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 28px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 20px 0 0 0;
  padding: 0;
`;

const Description = props => (
  <p style={{margin: '12px 0 0 0', padding: '0'}} className='secondary-color'>{props.children}</p>
)

const Card = ({thumbnail}) => {
  return (
  <CardWrapper>
    <ImageWithSkeleton width='100%' src={thumbnail.photo} skeleton={thumbnail.skeleton}/>
    <Title className='font-assistant'>{thumbnail.title}</Title>
    <Description>{thumbnail.description}</Description>
    <Description>{thumbnail.createdDate}</Description>
  </CardWrapper>
  )
}

export default Card;