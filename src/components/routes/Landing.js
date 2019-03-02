import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

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
                <NavLink to="/give">
                  <Button size="medium" color="primary">
                    Give
                  </Button>
                </NavLink>
                <Button size="medium" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm container>
            <Card>
              <CardContent>
                <h1>Accept/Acceptar</h1>
                Lorem ipsum dolor amet food truck yuccie swag mumblecore franzen
                selfies ugh, fanny pack quinoa. Vexillologist hexagon drinking
                vinegar, kale chips hell of pok pok wolf sriracha vinyl
                cornhole. Vexillologist VHS unicorn ramps, umami church-key
                everyday carry PBR&B chillwave plaid pabst freegan.
              </CardContent>

              <CardActions>
                <NavLink to="/accept">
                  <Button size="medium" color="primary">
                    Accept
                  </Button>
                </NavLink>
                <Button size="medium" color="primary">
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
