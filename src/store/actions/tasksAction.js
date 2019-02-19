export const getTasks = () => {
    return (dispatch) => {
        fetch('https://apex.cc-west.de/ords/mbouchi/tasksapp/tasks')
        .then(function(response) {
            return response.json()
        }).then(data => {
            if(data.items.length !== 0)
               dispatch({ type: "GET_TASKS", payload: data.items });
        });
    };
};

export const updateTaskStatus = (id, newStatus) => {
    return (dispatch) => {
        fetch('https://apex.cc-west.de/ords/mbouchi/tasksapp/tasks', {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'id': `${id}`,
                'newStatus': `${newStatus}`,
                }
        }).then((data) => {
            return data.json()
        }).then(res => {
             dispatch({ type: "GET_TASKS", payload: res.results });
        });
    };
}
