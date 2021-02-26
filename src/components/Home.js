import React, { useContext, useEffect } from 'react';
import { PostContext } from '../context/post.context';
import PostService from '../services/post.service';

import PostList from './PostList';

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
        <div className="container mt-3 w-55">
            <PostList posts={state.posts} />
        </div>
    )
};

export default Home;