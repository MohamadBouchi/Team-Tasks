export const getTasks = () => {
    return (dispatch) => {
        fetch('https://apex.cc-west.de/ords/tasks/tasksapp/tasks')
        .then(response => {
            return response.json();
        }).then(data => {
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
            dispatch({ type: "GET_TASKS", payload: data });
        });
    };
}

export const newTask = (task_title, task_link, task_detail, due_date) => {
    return (dispatch) => {
        fetch('https://apex.cc-west.de/ords/tasks/tasksapp/tasks', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                task_title: `${task_title}`,
                task_detail: `${task_detail}`,
                task_link: `${task_link}`,
                due_date: `${due_date}`,
                }
        }).then(response => {
            return response.json();
        }).then(data => {
            dispatch({ type: "AFTER_INSERT", payload: data });
        });
    };
};


export const searchTask = (search) => {
    return (dispatch) => {
        dispatch({ type: "SEARCH_TASK", payload: search });
    }
}