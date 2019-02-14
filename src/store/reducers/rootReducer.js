import authReducer from './authReducer';
//import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     auth: authReducer,
//     activities: activityReducer,
//     tasks: taskReducer
// });

const rootReducer = authReducer;
export default rootReducer;