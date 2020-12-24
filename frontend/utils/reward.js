export const postReward = reward => {
    return $.ajax({
        url: `api/rewards`,
        method: `POST`,
        data: { reward }
    });
};