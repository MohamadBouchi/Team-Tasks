import React from 'react'
import Grid from '@material-ui/core/Grid';
import TaskCard from './TaskCard';
import { tasks } from '../../store/actions/tasksAction';
import { connect } from 'react-redux';

class MainContent extends React.Component  {

    componentWillMount(){
        this.props.tasks();
    }


    onDrop = (e, newStatus) => {
        e.preventDefault();
        const stringData = JSON.parse(e.dataTransfer.getData("text"));
        console.log(stringData)
    }
    
    render(){
        return (
          <Grid container item md={8} spacing={0} justify="center" className="main-content">
              <Grid item md={3} className="open-tasks" onDrop={(e) =>this.onDrop(e, 'finished')}>
                  <h4 className="open-tasks-title">open ({this.props.open.length})</h4>
                  <div className="cards-container">
                    { this.props.open.map( task =>
                        <TaskCard key={task.id} task={task} />
                    )}
                  </div>
              </Grid>
              <Grid item md={3} className="inprocess-tasks" onDragOver={(e) =>console.log(e)}>
                  <h4 className="inprocess-tasks-title">in process ({this.props.inprocess.length})</h4>
                  <div className="cards-container">
                    { this.props.inprocess.map( task =>
                        <TaskCard key={task.id} task={task} />
                    )}
                  </div>
              </Grid>
              <Grid item md={3} className="waiting-tasks">
                  <h4 className="waiting-tasks-title">waiting ({this.props.waiting.length})</h4>
                  <div className="cards-container">
                    { this.props.waiting.map( task =>
                        <TaskCard key={task.id} task={task} />
                    )}
                  </div>
              </Grid>
              <Grid item md={3} className="finished-tasks">
                  <h4 className="finished-tasks-title">finished ({this.props.finished.length})</h4>
                  <div className="cards-container">
                    { this.props.finished.map( task =>
                        <TaskCard key={task.id} task={task} />
                    )}
                  </div>
              </Grid>
          </Grid>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      tasks: () => dispatch(tasks())
    }
  }
  
  const mapStateToProps = (state) => {
    return {
        open: state.tasks.open,
        inprocess: state.tasks.inprocess,
        waiting: state.tasks.waiting,
        finished: state.tasks.finished
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainContent);