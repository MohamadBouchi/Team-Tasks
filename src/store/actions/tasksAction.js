export const tasks = () => {
    return (dispatch) => {
        fetch('https://apex.cc-west.de/ords/mbouchi/tasksapp/tasks')
        .then(function(response) {
            return response.json()
        }).then(data => {
            if(data.items.length !== 0)
               dispatch({ type: "TASKS", payload: data.items });
        });
    };
};
