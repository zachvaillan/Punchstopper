import {postUser, postSession, deleteSession} from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const endSession = () => ({
    type: LOGOUT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const createUser = user => dispatch => (
    postUser(user)
        .then( user => dispatch(receiveCurrentUser(user)))
);

export const loginUser = user => dispatch => (
    postSession(user)
        .then( (user) => dispatch(receiveCurrentUser(user)))
);

export const logoutUser = () => dispatch => (
    deleteSession()
        .then( () => dispatch(endSession()))
);