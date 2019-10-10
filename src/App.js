import React from "react";
import "./App.css";
import Picture from "./components/Photo";
import styled from "styled-components";

const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: "Major Mono Display", monospace;
`;

const HeaderText = styled.h1`
  border: 3px solid white;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.329);
`;

const MainContent = styled.div`
  text-align: center;
  background-color: #02030f;
  color: white;
  font-family: "Space Mono", monospace;
  padding: 20px;
`;

function App() {
  return (
    <div>
      <Header className="App-header">
        <HeaderText>nAsA photo of the dAy</HeaderText>
        <div>
          <i class="far fa-arrow-alt-circle-down fa-3x"></i>
        </div>
      </Header>
      <MainContent className="App">
        <Picture />
      </MainContent>
    </div>
  );
}

export default App;
