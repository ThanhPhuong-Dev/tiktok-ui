import * as httpRequest from '~/util/httpRequest';

export const getFollowingAPI = async ({ page }) => {
    try {
        const res = await httpRequest.get(`me/followings`, {
            params: {
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log('errror');
    }
};
