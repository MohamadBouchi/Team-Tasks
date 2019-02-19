
const initState = {
    open: [],
    inprocess: [],
    waiting: [],
    finished: []
};
const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            const open = action.payload.filter(task => {
                if (task.status === 'open') return task;
                else return null;
            });
            const inprocess = action.payload.filter(task => {
                if (task.status === 'inprocess') return task;
                else return null;
            });
            const waiting = action.payload.filter(task => {
                if (task.status === 'waiting') return task;
                else return null;
            });
            const finished = action.payload.filter(task => {
                if (task.status === 'finished') return task;
                else return null;
            });
            return {
                ...state,
                open,
                inprocess,
                waiting,
                finished
            };
        default:
            return state;
    }
}
export default taskReducer;