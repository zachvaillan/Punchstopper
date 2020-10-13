export {postUser, postSession, deleteSession} from '../utils/session.js';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const createUser = user => dispatch => (
    postUser(user)
        .then( (user) => dispatch(receiveCurrentUser(user)))
);

export const loginUser = user => dispatch => (
    postSession(user)
        .then( (user) => dispatch(receiveCurrentUser(user)))
);

export const logoutUser = () => dispatch => (
    deleteSession()
        .then( () => dispatch(logoutUser()))
);