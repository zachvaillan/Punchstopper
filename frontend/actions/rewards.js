import { postReward } from '../utils/reward';

const receiveReward = reward => ({
    type: "hello",
    reward
})

export const createReward = reward => dispatch => (
    postReward(reward)
        .then(reward => dispatch(receiveReward(reward)))
);