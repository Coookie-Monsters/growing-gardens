import React, { Component } from 'react';
import './App.css';
import Landing from './components/routes/Landing';
import Give from './components/routes/Give';
import Accept from './components/routes/Accept';
import { Route, HashRouter } from 'react-router-dom';
import { auth, provider } from './firebase.js';
import { Button, AppBar, Backdrop } from '@material-ui/core';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }
  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  render() {
    if (this.state.user) {
      return (
        <HashRouter>
          <div className="app">
            <AppBar>
              <h1>Growing Gardens</h1>
            </AppBar>
            <Button onClick={this.logout}>Log Out</Button>
            <Route exact path="/" component={Landing} />
            <Route path="/give" component={Give} />
            <Route path="/accept" component={Accept} />
          </div>
        </HashRouter>
      );
    } else {
      return (
        <div className="app">
          <AppBar>
            <h1>Growing Gardens</h1>
          </AppBar>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>Please log in</h1>
          <Button onClick={this.login} color="primary">
            Log In
          </Button>
        </div>
      );
    }
  }
}

export default App;
