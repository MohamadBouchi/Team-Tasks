import React from 'react';
import Grid from '@material-ui/core/Grid';
import './dashboard.css';
import './timeLine.css';
import ToolsBar from '../../components/dashboard/ToolsBar';
import LeftSideBar from '../../components/dashboard/LeftSideBar';
import MainContent from '../../components/dashboard/MainContent';
import RightSideBar from '../../components/dashboard/RightSideBar';
import io from 'socket.io-client';
import withWidth from '@material-ui/core/withWidth';
import { Hidden } from '@material-ui/core';
const socket = io.connect('http://10.10.11.70:4000');

function Dashboard() {
  return (
    <React.Fragment>
      <ToolsBar></ToolsBar>
      <div className="container-fluid">
        <Grid container spacing={8} className="dashboard">
          <Hidden lgDown><LeftSideBar socket={socket}></LeftSideBar></Hidden>
          <MainContent socket={socket}></MainContent>
          <Hidden lgDown><RightSideBar></RightSideBar></Hidden>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default withWidth()(Dashboard);