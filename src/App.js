import React from 'react';
import SEO from './components/seo';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  padding: 0 120px;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

function App() {
  return (
    <Container>
      <SEO/>
      <Header/>
      <Footer/>
    </Container>
  );
}

export default App;
