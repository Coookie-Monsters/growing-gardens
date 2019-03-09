import React, { Component } from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import firebase, { auth } from '../firebase';

class Give extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      user: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ user: user });
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const donationsRef = firebase.database().ref('donations');
    const donation = {
      description: this.state.description,
      user: this.state.user.displayName || this.state.user.email
    };
    donationsRef.push(donation);
    this.setState({
      description: ''
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
        <form>
          <Typography variant="h6" color="inherit">
            Give
          </Typography>
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows="8"
            defaultValue="What would you like to donate?"
            margin="normal"
            name="description"
            onChange={this.handleChange}
          />
          <Button color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Give;
