import React from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Timeline }  from 'vertical-timeline-component-for-react';
import { getActivities } from '../../store/actions/activitiesAction';
import  TimeLineEntry  from './TimeLineEntry';

class LeftSideBar extends React.Component {
  componentWillMount(){
    this.props.getActivities();
  }
  render(){
    if(!this.props.loading){
      return (
        <Grid container item md={2} spacing={0} className="left-sidebar-container">
            <Grid item md={12} className="left-sidebar">
                <Timeline lineColor={'#ddd'}>
                { this.props.activities && this.props.activities.map( activity => 
                  <TimeLineEntry key={activity.id} user_name={activity.user_name} status={activity.status} task_title={activity.title} change_date={activity.change_date}/>
                  )}
              </Timeline>
            </Grid>
        </Grid>
      )} else {
        return(<h4>loading..</h4>)
      }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: () => dispatch(getActivities())
  }
}
const mapStateToProps = (state) => {
  return {
    activities: state.activities.activities,
    loading: state.activities.loading
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);