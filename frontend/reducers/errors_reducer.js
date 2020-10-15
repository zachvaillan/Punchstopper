import SessionErrorsReducer from './session_errors';
import {combineReducers} from 'redux';

const errorsReducer = combineReducers({
    sessionErrors: SessionErrorsReducer
});

export default errorsReducer;