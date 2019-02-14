import React from 'react'
import Grid from '@material-ui/core/Grid';
import TaskCard from './TaskCard';

export default function MainContent() {
  return (
    <Grid container item md={8} spacing={0} justify="center" className="main-content">
        <Grid item md={3} className="inprocess-tasks">
            <h4 className="open-tasks-title">open</h4>
            <div className="cards-container">
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
            </div>
        </Grid>
        <Grid item md={3} className="inprocess-tasks">
            <h4 className="inprocess-tasks-title">in process</h4>
            <div className="cards-container">
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
            </div>
        </Grid>
        <Grid item md={3} className="waiting-tasks">
            <h4 className="waiting-tasks-title">waiting</h4>
            <div className="cards-container">
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
            </div>
        </Grid>
        <Grid item md={3} className="finished-tasks">
            <h4 className="finished-tasks-title">finished</h4>
            <div className="cards-container">
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
            </div>
        </Grid>
    </Grid>
  )
}
