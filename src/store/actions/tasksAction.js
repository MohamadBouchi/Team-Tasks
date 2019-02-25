export const getTasks = () => {
    return (dispatch) => {
        fetch('https://apex.cc-west.de/ords/tasks/tasksapp/tasks')
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data)
            // if(data.tasks.length !== 0)
              dispatch({ type: "GET_TASKS", payload: data });
        });
    };
};

export const updateTaskStatus = (task_id, new_status, user_id) => {
    return (dispatch) => {
        fetch('https://apex.cc-west.de/ords/tasks/tasksapp/tasks', {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'task_id': `${task_id}`,
                'user_id': `${user_id}`,
                'new_status': `${new_status}`,
                }
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data)
            dispatch({ type: "GET_TASKS", payload: data });
        });
    };
}
