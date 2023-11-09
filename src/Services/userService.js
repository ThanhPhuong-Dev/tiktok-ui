import * as httpRequest from '~/util/httpRequest';

export const getSuggestAPI = async ({ page, perPage }) => {
    try {
        const res = await httpRequest.get(`users/suggested`, {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log('errror');
    }
};
