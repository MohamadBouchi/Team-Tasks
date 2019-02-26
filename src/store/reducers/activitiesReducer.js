
const initState = {
    activities: [],
    loading: true
};
const activitiesReducer = (state = initState, action) => {
    let activities = [];
    switch (action.type) {
        case 'GET_ACTIVITIES':
            activities = action.payload.activity;
            return {
                ...state,
                activities,
                loading: false
            };
        case 'AFTER_INSERT_ACTIVITY':
            activities = action.payload.activity;
            return {
                ...state,
                activities,
                loading: false
            };
        default:
            return state;
    }
}
export default activitiesReducer;