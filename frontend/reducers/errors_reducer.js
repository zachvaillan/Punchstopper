import SessionErrorsReducer from './session_errors';
import {combineReducers} from 'redux';
import SignupErrors from './signup_errors';

const errorsReducer = combineReducers({
    sessionErrors: SessionErrorsReducer,
    signupErrors: SignupErrors
});

export default errorsReducer;