import {RECEIVE_CURRENT_USER, LOGOUT_USER} from '../actions/session'

const sessionReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            console.log("RECEIVIE CURRENT USER");
            console.log(action.user);
            console.log(oldState);
            return Object.assign({}, {currentUser: action.user});
        case LOGOUT_USER:
            return Object.assign({}, {currentUser: null});
        default: 
            return oldState;
    };
};

export default sessionReducer;