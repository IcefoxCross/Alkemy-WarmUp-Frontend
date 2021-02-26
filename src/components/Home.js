import React, { useContext } from 'react';
import { PostContext } from '../context/post.context';

import PostList from './PostList';

const Home = () => {

    const [state, dispatch] = useContext(PostContext);

    return (
        <div className="container mt-3 w-55">
            <PostList posts={state.posts} />
        </div>
    )
};

export default Home;