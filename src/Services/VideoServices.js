import * as httpRequest from '~/util/httpRequest';

export const videoAPI = async ({type , page}) => {
    try {
        const res = await httpRequest.get(`/videos`, {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log('errror');
    }
};
