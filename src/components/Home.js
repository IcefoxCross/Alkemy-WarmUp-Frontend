import React, { useContext, useEffect } from 'react';
import { PostContext } from '../context/post.context';
import PostService from '../services/post.service';

const Home = () => {
    const [state, dispatch] = useContext(PostContext);
    useEffect(() => {
        if (state.posts.length === 0) {
            PostService.getPosts().then(res => {
                dispatch({
                    type: 'FETCH_POSTS',
                    payload: res.data
                });
            });
        } else {
            console.log('Posts already loaded.');
        }
    }, [dispatch]);

    return (
        <div>
            <h1>{state.posts.length} posts</h1>
        </div>
    )
};

export default Home;