import authReducer from './authReducer';
import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: tasksReducer
});

export default rootReducer;