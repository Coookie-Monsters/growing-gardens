import React, { Component } from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import firebase, { auth } from '../firebase';

class Give extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      user: null,
      donations: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ user: user });
    });
    const donationsRef = firebase.database().ref('donations');
    donationsRef.on('value', snapshot => {
      let donations = snapshot.val();
      let newState = [];
      for (let donation in donations) {
        newState.push({
          id: donation,
          description: donations[donation].description,
          user: donations[donation].user
        });
      }
      this.setState({
        donations: newState
      });
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
  removeDonation(donationId) {
    const donationRef = firebase.database().ref(`/donations/${donationId}`);
    donationRef.remove();
  }
  render() {
    return (
      <div className="give-page">
        <form>
          <Typography variant="h3" color="inherit">
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
          <br />
          <Button color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </form>
        <Typography variant="h6" color="inherit">
          Your Donations
        </Typography>
        <ul>
          {this.state.donations.map(donation => {
            return (
              <li key={donation.id}>
                <p>
                  {donation.description}
                  {donation.user === this.state.user.displayName ||
                  donation.user === this.state.user.email ? (
                    <Button
                      color="primary"
                      onClick={() => this.removeDonation(donation.id)}
                    >
                      Remove
                    </Button>
                  ) : null}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Give;
