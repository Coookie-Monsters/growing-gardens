import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Login from './components/Login';

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
          <Login />
        </header>
      </div>
    );
  }
}

export default App;
