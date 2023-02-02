import "./App.css";
import { Container } from "react-bootstrap";
import Dictionary from "./Dictionary";
import React from "react";

function App() {
  return (
    <div className="App">
      <Container className="AppWrap">
        <Container className="AppContainer">
          <Dictionary />
        </Container>
        <footer>
          This app was coded by Kaja Królikowska, and it is open-sourced on{" "}
          <a
            href="https://github.com/kajakrolikowska/dictionary"
            alt="GitHub repository link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://moonlit-gaufre-0b0dcb.netlify.app"
            alt="Link to website"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </Container>
    </div>
  );
}

export default App;
