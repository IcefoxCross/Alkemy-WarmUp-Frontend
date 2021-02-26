import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: "json"
});

const getPosts = () => {
    return axiosInstance.get('/posts');
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPosts
};