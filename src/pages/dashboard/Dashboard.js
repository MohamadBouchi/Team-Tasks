import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './dashboard.css';
import ToolsBar from '../../components/dashboard/ToolsBar';
import LeftSideBar from '../../components/dashboard/LeftSideBar';
import MainContent from '../../components/dashboard/MainContent';
import RightSideBar from '../../components/dashboard/RightSideBar';

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <ToolsBar></ToolsBar>
        <div className="container-fluid">
          <Grid container spacing={8} className="dashboard">
            <LeftSideBar></LeftSideBar>
            <MainContent></MainContent>
            <RightSideBar></RightSideBar>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;