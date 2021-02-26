import React from 'react';

import PostItem from './PostItem';

const PostList = ({posts}) => {
    return (
        <>
            <table className="table">
                <thead>
                    <th>Title</th>
                    <th></th>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default PostList