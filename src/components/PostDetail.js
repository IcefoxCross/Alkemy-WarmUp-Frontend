import React, { useEffect, useState } from 'react';
import PostService from '../services/post.service';

const PostDetail = (props) => {
    const [post, setPost] = useState({title: '', body: ''});

    useEffect(() => {
        const postId = props.match.params.id;
        PostService.getPost(postId).then(res => {
            setPost(res.data);
        }).catch(e => {setPost({title: 'Post not found.', body: ''});});
    }, []);

    return (
        <div className="container mt-3 card w-90">
            <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    )
};

export default PostDetail;