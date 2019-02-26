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

// export const newTask = (task_title, task_link, task_detail, due_date) => {
//     return (dispatch) => {
//         fetch('https://apex.cc-west.de/ords/tasks/tasksapp/tasks', {
//             method:'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 task_title: `${task_title}`,
//                 task_detail: `${task_detail}`,
//                 task_link: `${task_link}`,
//                 due_date: `${due_date}`,
//                 }
//         }).then(response => {
//             return response.json();
//         }).then(data => {
//             dispatch({ type: "AFTER_INSERT", payload: data });
//         });
//     };
// };