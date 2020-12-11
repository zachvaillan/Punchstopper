import sessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';
import errorsReducer from './errors_reducer';
import {combineReducers} from 'redux';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    projects: projectsReducer,
    errors: errorsReducer,
    user: userReducer
});

export default rootReducer;