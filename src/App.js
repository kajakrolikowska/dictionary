import "./App.css";
import { Container } from "react-bootstrap";
import Dictionary from "./Dictionary";
import React from "react";

function App() {
  return (
    <div className="App">
      <Container className="AppContainer">
        <Dictionary />
      </Container>
    </div>
  );
}

export default App;
