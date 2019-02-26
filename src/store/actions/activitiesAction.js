export const getActivities = () => {
    return (dispatch) => {
        fetch('https://apex.cc-west.de/ords/tasks/tasksapp/activities')
        .then(response => {
            return response.json();
        }).then(data => {
            dispatch({ type: "GET_ACTIVITIES", payload: data });
        });
    };
};

export const newActivity = (user_id, task_id, new_status) => {
    return (dispatch) => {
        fetch('https://apex.cc-west.de/ords/tasks/tasksapp/activities', {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'task_id': `${task_id}`,
                'user_id': `${user_id}`,
                'new_status': `${new_status}`
                }
        }).then(response => {
            return response.json();
        }).then(data => {
            dispatch({ type: "AFTER_INSERT_ACTIVITY", payload: data });
        });
    };
};