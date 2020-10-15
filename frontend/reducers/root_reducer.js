import sessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';
import errorsReducer from './session_errors';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    session: sessionReducer,
    projects: projectsReducer,
    errors: errorsReducer
});

export default rootReducer;