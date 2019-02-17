import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://www.growing-gardens.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            Growing Gardens
          </a>
        </header>
      </div>
    );
  }
}

export default App;
