
const initState = {
    activities: [],
    loading: true
};
const activitiesReducer = (state = initState, action) => {
    let activities = [];
    switch (action.type) {
        case 'GET_ACTIVITIES':
            activities = action.payload.activity;
            console.log(activities)
            return {
                ...state,
                activities,
                loading: false
            };
        // case 'AFTER_INSERT':
        //     open = action.payload.open_tasks;
        //     return {
        //         ...state,
        //         open,
        //         loading: false
        //     };
        default:
            return state;
    }
}
export default activitiesReducer;