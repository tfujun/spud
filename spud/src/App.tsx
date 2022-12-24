import logo from './logo.svg';
import './App.css';
import * as Styled from './Styled';

function App() {
  return (
      <Styled.StyledContainer id="App">
        <Styled.StyledHeading>
          <Styled.StyledImg src={logo} className="App-logo" alt="logo" />
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
        </Styled.StyledHeading>
      </Styled.StyledContainer>
  );
}

export default App;
