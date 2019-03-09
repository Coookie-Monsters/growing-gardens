import React, { Component } from 'react';
import { auth, provider } from '../firebase.js';
import { Button, AppBar, Typography, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  grow: {
    flexGrow: 1
  }
};

class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
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
  getLoginButton() {
    if (this.state.user) {
      return (
        <Button onClick={this.logout} color="inherit">
          Log Out
        </Button>
      );
    }
    return (
      <Button onClick={this.login} color="inherit">
        Log In
      </Button>
    );
  }
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className={this.props.classes.grow}
          >
            Growing Gardens
          </Typography>
          {this.getLoginButton()}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(MenuBar);
