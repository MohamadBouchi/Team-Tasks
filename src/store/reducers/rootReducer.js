import authReducer from './authReducer';
import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import activitiesReducer from './activitiesReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
    activities: activitiesReducer
});

export default rootReducer;