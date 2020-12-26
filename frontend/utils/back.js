export const postBack = back => {
    return $.ajax({
        url: `api/backs`,
        method: `POST`,
        data: { back }
    });
};