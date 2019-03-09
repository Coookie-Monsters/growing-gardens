import React, { Component } from 'react';
import './App.css';
import Landing from './components/routes/Landing';
import Give from './components/routes/Give';
import Accept from './components/routes/Accept';
import { Route, HashRouter } from 'react-router-dom';
import { auth } from './firebase.js';
import MenuBar from './components/MenuBar';
import { Typography } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ user: user });
    });
  }
  getContent() {
    if (this.state.user) {
      return (
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/give" component={Give} />
          <Route path="/accept" component={Accept} />
        </div>
      );
    }
    return (
      <div>
        <Typography variant="h3" color="inherit">
          Please log in
        </Typography>
      </div>
    );
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <div className="app">
            <MenuBar />
            {this.getContent()}
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
