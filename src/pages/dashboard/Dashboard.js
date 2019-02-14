import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
              <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        <Grid container  justify="center">
            <Grid >
                <Paper
                >
                  test
                </Paper>
              </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
        <Grid item md={2}>
          <Grid container  justify="center">
            test
          </Grid>
        </Grid>
        <Grid item md={2}>
          <Grid container  justify="center">
            test
          </Grid>
        </Grid>
        <Grid item md={2}>
          <Grid container  justify="center">
            test
          </Grid>
        </Grid>
        <Grid item md={2}>
          <Grid container  justify="center">
            test
          </Grid>
        </Grid>
        <Grid item md={2}>
          <Grid container  justify="center">
            test
          </Grid>
        </Grid>
        <Grid item md={2}>
          <Grid container  justify="center">
            test
          </Grid>
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default Dashboard;