
const initState = {
    open: [],
    inprocess: [],
    waiting: [],
    finished: [],
    loading: true
};
const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            const open = action.payload.open_tasks;
            const inprocess = action.payload.inprocess_tasks;
            const waiting = action.payload.waiting_tasks;
            const finished = action.payload.finished_tasks;
            return {
                ...state,
                open,
                inprocess,
                waiting,
                finished,
                loading: false
            };
        default:
            return state;
    }
}
export default taskReducer;