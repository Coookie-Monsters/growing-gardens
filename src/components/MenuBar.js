import React, { Component } from 'react';
import { auth, provider } from '../firebase.js';
import { Button, AppBar, Typography, Toolbar } from '@material-ui/core';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { HashRouter, Link } from 'react-router-dom';
import theme from '../theme';

const styles = {
  grow: {
    flexGrow: 1
  },
  headerLink: {
    textDecoration: 'none',
    color: 'inherit'
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
    const { classes } = this.props;
    return (
      <HashRouter>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link to="/" className={classes.headerLink}>
                  Growing Gardens
                </Link>
              </Typography>
              {this.getLoginButton()}
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default withStyles(styles)(MenuBar);
