import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Styled from './Styled';

function App() {
  return (
    <Styled.styledContainer id="App">
      <Styled.styledHeading>
        <Styled.styledImg src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Styled.styledHeading>
    </Styled.styledContainer>
  );
}

export default App;
