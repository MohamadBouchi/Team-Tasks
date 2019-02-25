import React from 'react'
import TextField from '@material-ui/core/TextField';
import NewTask from './NewTask'
export default function ToolsBar() {
  return (
    <form noValidate autoComplete="off" className="toolsbar">
        <TextField
            id="searchField"
            label="Search"
            margin="none"/>
        <NewTask />
    </form>
  )
}
