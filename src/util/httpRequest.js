import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (api, option = {}) => {
    const response = await httpRequest.get(api, option);
    return response.data;
};
export default httpRequest;
