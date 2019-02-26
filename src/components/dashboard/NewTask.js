import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { newTask } from '../../store/actions/tasksAction';
import { DatePicker } from 'material-ui-pickers';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

const styles = {
  newTask: {
    float: 'right',
    marginTop: '15px',
  },
  newTaskForm: {
    padding: '25px 25px 40px 25px'
  },
  textField: {
    marginLeft: '5px',
    marginRight: '5px',
    width: '350px'
  },
  formAction: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  formSubmit: {
    alignSelf: 'flex-end'
  }
};

class NewTask extends React.Component {
  state = {
    bottom: false,
    task_title: '',
    task_link: '',
    task_detail: '',
    selectedDate: new Date().toISOString()
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  toggleDrawer = (open) => () => {
    this.setState({
      'bottom': open
    });
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  submitHandler = (e) => {
      e.preventDefault();
      let due_date =new Date (this.state.selectedDate);
      due_date = due_date.getFullYear() + '.' + (due_date.getMonth()+1) + '.' + due_date.getDate();
      this.props.newTask(this.state.task_title, this.state.task_link, this.state.task_detail, due_date);
  }
  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;
    return (
      <div className={classes.newTask}>
        <Button onClick={this.toggleDrawer(true)} variant="contained" className={classes.newTaskBtn}>New Task</Button>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer(false)}>
          <form className={classes.newTaskForm} onSubmit={this.submitHandler}>
            <TextField
              onChange={this.handleChange}
              className={classes.textField}
              name='task_title'
              required={true}
              id="task-title"
              label="title"
              margin="normal"/>

            <TextField
              onChange={this.handleChange}
              className={classes.textField}
              id="task-link"
              label="Link"
              name='task_link'
              margin="normal"/>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                margin="normal"
                label="Due to"
                value={selectedDate}
                onChange={this.handleDateChange}
              />
              </MuiPickersUtilsProvider>
              <br/>
            
          <div className={classes.formAction}>
          <TextField
              onChange={this.handleChange}
              name='task_detail'
              className={classes.textField}
              id="task-detail"
              label="detail"
              multiline
              rows="3"
              margin="normal"/>
            <Button variant="contained" type="submit" className={classes.formSubmit} color="primary">Create</Button>
            </div>
          </form>
        </Drawer>
      </div>
    );
  }
}

NewTask.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    newTask: (task_title, task_link, task_detail, due_date) => dispatch(newTask(task_title, task_link, task_detail, due_date))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(NewTask));