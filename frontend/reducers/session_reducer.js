import {RECEIVE_CURRENT_USER, LOGOUT_USER} from '../actions/session';

const _nullSession = {
    currentUser: null
};

const sessionReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {currentUser: action.user});
        case LOGOUT_USER:
            return _nullSession;
        default: 
            return oldState;
    };
};

export default sessionReducer;