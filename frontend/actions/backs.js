import { postBack } from '../utils/back';

const receiveBack = back => ({
    type: "hello",
    back
})

export const createBack = back => dispatch => (
    postBack(back)
        .then(back => dispatch(receiveBack(back)))
);