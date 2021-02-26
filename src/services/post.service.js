import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: "json"
});

const getPosts = () => {
    return axiosInstance.get('/posts');
};

const getPost = (postId) => {
    return axiosInstance.get(`/posts/${postId}`);
};

const createPost = (title, body, userId) => {
    return axiosInstance.post('/posts', {title, body, userId});
};

const deletePost = (postId) => {
    return axiosInstance.delete(`/posts/${postId}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPosts, getPost, createPost, deletePost
};