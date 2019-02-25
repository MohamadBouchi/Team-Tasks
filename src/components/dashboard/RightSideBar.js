import React from 'react'
import Grid from '@material-ui/core/Grid';
// import { TimelineItem }  from 'vertical-timeline-component-for-react';
// import { Timeline }  from 'vertical-timeline-component-for-react';

export default function RightSideBar() {
  // const bodyContainerStyle = {
  //           background: 'silver',
  //           margin: '0 10px 0 15px',
  //           padding: '5px',
  //           borderRadius: '8px',
  //           boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'}
  return (
    <Grid container item md={2} spacing={0} className="right-sidebar-container">
        <Grid item md={12} className="right-sidebar">
          {/* <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key={1}
                dateText='2019-20-1'
                style={{ color: '#76bb7f' }}
                dateInnerStyle={{ background: '#76bb7f', color: '#000' }}
                bodyContainerStyle={bodyContainerStyle}>
                    <h5>mohamed</h5>
                    <h6 style={{ color: 'blue' }}>test</h6>
                    <p>
                      Change Status to <i style={{color: 'green'}}>open</i>
                    </p>
            </TimelineItem>
            <TimelineItem
                key={2}
                dateText='2019'
                style={{ color: '#76bb7f' }}
                dateInnerStyle={{ background: '#76bb7f', color: '#000' }}
                bodyContainerStyle={bodyContainerStyle}>
                    <h5>mohamed</h5>
                    <h6 style={{ color: 'blue' }}>test</h6>
                    <p>
                      Change Status to <i style={{color: 'green'}}>open</i>
                    </p>
            </TimelineItem>
          </Timeline> */}
        </Grid>
    </Grid>
  )
}
