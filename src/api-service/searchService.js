import * as Request from '~/util/request';

export const searchAPi = async (q, type = 'less') => {
    try {
        const res = await Request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log('errror');
    }
};
