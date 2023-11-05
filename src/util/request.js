import axios from 'axios';

const Request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});


export const get = async (api, option ={})=>{
    const response = await Request.get(api,option)
    return response.data
}
export default Request;
