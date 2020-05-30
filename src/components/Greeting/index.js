import React from "react"
import styled from 'styled-components'

const greetingText1 = `Hello! `;
const greetingText2 = `I am Astari - an interface and experience designer from Bogor, Indonesia`;

const GreetingWrapper = styled.section`
  margin-top: 256px;
  width: 50%;
  @media (max-width: 768px) {
    margin-top: 144px;
    width: 100%;
  }
`;
const GreetingHeading = styled.h1`
  font-size: 36px;
  display: block;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-right: 32px;
    transition: 0.5s;
    transition-timing-function: linear;
  }
`;

const Greeting = () => (
  <GreetingWrapper>
    <GreetingHeading className={'font-assistant'}>
    {greetingText1}
  </GreetingHeading>
  <GreetingHeading className={'font-assistant'}>
    {greetingText2}
  </GreetingHeading>
  </GreetingWrapper>
)

export default Greeting