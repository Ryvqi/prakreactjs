import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ToggleMessage from './ToggleMessage';

function App() {
  const [text, setText] = useState("Edit src/App.js and save to reload.");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
        <button onClick={() => setText("You clicked the button!")}>Click me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
        <ToggleMessage />
      </header>
    </div>
  );
}

export default App;
