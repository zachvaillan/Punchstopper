import { RECEIVE_USER } from '../actions/user';


const userReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_USER:
            return action.user
        default:
            return oldState;
    };
};

export default userReducer;