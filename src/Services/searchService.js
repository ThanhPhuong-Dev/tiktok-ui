import * as httpRequest from '~/util/httpRequest';

export const searchAPi = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get(`users/search`, {
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
