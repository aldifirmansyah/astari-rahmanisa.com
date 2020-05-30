import React from "react"
import styled from 'styled-components'

const greetingText1 = `Hello! `;
const greetingText2 = `I am Astari - an interface and experience designer from Bogor, Indonesia`;

const GreetingWrapper = styled.section`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const GreetingHeading = styled.h1`
  font-size: 36px;
  display: inline;
  @media (max-width: 768px) {
    font-size: 24px;
    display: block;
    margin: 0 32px 0 0;
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