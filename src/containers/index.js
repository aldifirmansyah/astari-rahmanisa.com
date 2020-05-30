import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Work from './Work';
import About from './About';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Container = styled.div`
  margin: 0 auto;
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

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 14px;
    font-family: 'worksans', sans-serif;
  }
  
  body {
    background-color: ${(props) => (props.theme.darkMode ? '#0E0C16' : '#FFFFFF')};
    color: ${(props) => (props.theme.darkMode ? '#FFFFFF' : '#0E0C16')};
    transition: 0.5s;
    margin: 0;
    padding: 0;
  }

  .font-worksans {
    font-family: 'worksans', sans-serif; 
  }

  .font-assistant {
    font-family: 'assistant', sans-serif;
    word-spacing: 4px;
  }

  .active-header {
    color: #EF9DFD;
  }

  .background-color {
    background-color: ${(props) => (props.theme.darkMode ? '#0E0C16' : '#FFFFFF')};
  }
  .color-primary {
    color: ${(props) => (props.theme.darkMode ? '#FFFFFF' : '#0E0C16')};
  }
  .color-secondary {
    color: ${(props) => (props.theme.darkMode ? '#FAFBFC' : '#6B6E8C')};
  }
`;



function App() {
  const [_isDarkMode, _setIsDarkMode] = React.useState(false);
  
  function toggleDarkMode(val) {
    _setIsDarkMode(val);
  }
  return (
      <ThemeProvider theme={{darkMode: _isDarkMode}}>
        <GlobalStyle/>
        <Router>
          <Container>
            <Header isDarkMode={_isDarkMode} setDarkMode={toggleDarkMode}/>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Work />
              </Route>
            </Switch>
            <Footer isDarkMode={_isDarkMode}/>
          </Container>
        </Router>
      </ThemeProvider>
  );
}

export default App;
