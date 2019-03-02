import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid
} from '@material-ui/core';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Growing Gardens</h1>
        <Grid container spacing={16}>
          <Grid item sm container>
            <Card>
              <CardContent>
                <h1>Give/Dar</h1>
                Lorem ipsum dolor amet food truck yuccie swag mumblecore franzen
                selfies ugh, fanny pack quinoa. Vexillologist hexagon drinking
                vinegar, kale chips hell of pok pok wolf sriracha vinyl
                cornhole. Vexillologist VHS unicorn ramps, umami church-key
                everyday carry PBR&B chillwave plaid pabst freegan.
              </CardContent>

              <CardActions>
                <Button size="small" color="primary">
                  Give
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm container>
            <Card>
              <CardContent>
                <h1>Accept/Acceptar</h1>
                Checkmate... God help us, we're in the hands of engineers. I was
                part of something special. Life finds a way. Eventually, you do
                plan to have dinosaurs on your dinosaur tour, right? Eventually,
                you do plan to have dinosaurs on your dinosaur tour, right?
              </CardContent>

              <CardActions>
                <Button size="small" color="primary">
                  Accept
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Landing;
