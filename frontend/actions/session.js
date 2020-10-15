import {postUser, postSession, deleteSession} from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const endSession = () => ({
    type: LOGOUT_USER,
});

const receiveLoginErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const receiveSignupErrors = errors => ({
    type: RECEIVE_SIGNUP_ERRORS,
    errors
});

export const createUser = user => dispatch => (
    postUser(user)
        .then( user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveSignupErrors(errors.responseJSON))
        )
);

export const loginUser = user => dispatch => (
    postSession(user)
        .then( (user) => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveLoginErrors(errors.responseJSON))
        )
);

export const logoutUser = () => dispatch => (
    deleteSession()
        .then( () => dispatch(endSession()))
);