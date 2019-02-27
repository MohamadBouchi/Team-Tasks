
const initState = {
    open: [],
    inprocess: [],
    waiting: [],
    finished: [],
    loading: true
};
const taskReducer = (state = initState, action) => {
    let open, inprocess, waiting, finished = [];
    switch (action.type) {
        case 'GET_TASKS':
            open = action.payload.open_tasks;
            inprocess = action.payload.inprocess_tasks;
            waiting = action.payload.waiting_tasks;
            finished = action.payload.finished_tasks;
            return {
                ...state,
                open,
                inprocess,
                waiting,
                finished,
                loading: false
            };
        case 'AFTER_INSERT':
            open = action.payload.open_tasks;
            return {
                ...state,
                open,
                loading: false
            };
        case 'SEARCH_TASK':
            const search = action.payload;
            open = state.open.filter( task => {
                return task.title.includes(search)
            });
            return {
                ...state,
                open,
                loading: false
            };
        default:
            return state;
    }
}
export default taskReducer;