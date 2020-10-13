import sessionReducer from './root_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    session: sessionReducer
});

export default rootReducer;