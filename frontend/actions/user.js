import { getUser } from '../utils/user';

export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = userId => dispatch => (
    getUser(userId)
)