
const initState = {
    activities: [],
    user_tasks: {},
    loading_activities: true
};
const activitiesReducer = (state = initState, action) => {
    let activities = [];
    let user_tasks = {};
    switch (action.type) {
        case 'GET_ACTIVITIES':
            activities = action.payload.activity;
            user_tasks = action.payload.user_tasks;
            return {
                ...state,
                activities,
                user_tasks,
                loading_activities: false
            };
        case 'AFTER_INSERT_ACTIVITY':
            activities = action.payload.activity;
            user_tasks = action.payload.user_tasks;
            return {
                ...state,
                activities,
                user_tasks,
                loading_activities: false
            };
        default:
            return state;
    }
}
export default activitiesReducer;