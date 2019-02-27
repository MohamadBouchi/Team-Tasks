import React from 'react'
import Grid from '@material-ui/core/Grid';
import TaskCard from './TaskCard';
import { getTasks, updateTaskStatus } from '../../store/actions/tasksAction';
import { newActivity } from '../../store/actions/activitiesAction';
import { connect } from 'react-redux';


class MainContent extends React.Component  {

    componentWillMount(){
      this.props.getTasks();
    }
    componentDidMount(){
      this.props.socket.on('update', () => this.props.getTasks());
    }
    onDragOver = (e) => {
      e.preventDefault();
    }
    onDrop = (e, new_status) => {
        e.preventDefault();
        const stringData = JSON.parse(e.dataTransfer.getData("text"));
        if(stringData.status !== new_status) {
          this.props.updateTaskStatus(stringData.task_id, new_status, this.props.user_id);
          setTimeout(()=>{
            this.props.newActivity(this.props.user_id, stringData.task_id, new_status);
            this.props.socket.emit('update', null); 
          },500);
        }
    }
    render(){
      if(!this.props.loading){
        return (
          <Grid container item xl={8} lg={12} md={12} spacing={0} justify="center" className="main-content">
              <Grid item xl={3} lg={3} md={3} className="open-tasks" onDrop={(e) =>this.onDrop(e, 'open')} onDragOver={(e) =>this.onDragOver(e)}>
              <h4 className="open-tasks-title">open ({this.props.open.length})</h4>
                  <div className="cards-container">
                    { this.props.open.map( task =>
                        <TaskCard key={task.id} task={task} user_name='unknown'/>
                    )}
                  </div>
              </Grid>
              <Grid item xl={3} lg={3} md={3} className="inprocess-tasks" onDrop={(e) =>this.onDrop(e, 'inprocess')} onDragOver={(e) =>this.onDragOver(e)}>
                  <h4 className="inprocess-tasks-title">in process ({this.props.inprocess.length})</h4>
                  <div className="cards-container">
                    { this.props.inprocess.map( task =>
                        <TaskCard key={task.id} task={task} user_name={task.user_name}/>
                    )}
                  </div>
              </Grid>
              <Grid item xl={3} lg={3} md={3} className="waiting-tasks" onDrop={(e) =>this.onDrop(e, 'waiting')} onDragOver={(e) =>this.onDragOver(e)}>
                  <h4 className="waiting-tasks-title">waiting ({this.props.waiting.length})</h4>
                  <div className="cards-container">
                    { this.props.waiting.map( task =>
                        <TaskCard key={task.id} task={task} user_name={task.user_name}/>
                    )}
                  </div>
              </Grid>
              <Grid item xl={3} lg={3} md={3} className="finished-tasks" onDrop={(e) =>this.onDrop(e, 'finished')} onDragOver={(e) =>this.onDragOver(e)}>
                  <h4 className="finished-tasks-title">finished ({this.props.finished.length})</h4>
                  <div className="cards-container">
                    { this.props.finished.map( task =>
                        <TaskCard key={task.id} task={task} user_name={task.user_name}/>
                    )}
                  </div>
              </Grid>
          </Grid>
        )
      }
      else return (<h4>loading..</h4>)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      getTasks: () => dispatch(getTasks()),
      updateTaskStatus: (task_id, new_status, user_id) => dispatch(updateTaskStatus(task_id, new_status, user_id)),
      newActivity: (task_id, user_id, new_status) => dispatch(newActivity(task_id, user_id, new_status))
    }
  }
  
const mapStateToProps = (state) => {
  return {
      open: state.tasks.open,
      inprocess: state.tasks.inprocess,
      waiting: state.tasks.waiting,
      finished: state.tasks.finished,
      loading: state.tasks.loading,
      user_id: state.auth.user_id
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);