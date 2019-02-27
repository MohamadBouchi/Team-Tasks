import React from 'react'
import TextField from '@material-ui/core/TextField';
import NewTask from './NewTask';
import { searchTask } from '../../store/actions/tasksAction';
import { connect } from 'react-redux';

function ToolsBar(props) {
  const handleChange = (e) => {
    props.searchTask(e.target.value)
  }
  return (
    <form noValidate autoComplete="off" className="toolsbar">
        <TextField
            id="searchField"
            onChange={handleChange}
            label="Search"
            margin="none"/>
        <NewTask />
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchTask: (search) => dispatch(searchTask(search))
  }
}
export default connect(null, mapDispatchToProps)(ToolsBar)