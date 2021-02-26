import React, { useEffect, useState, useContext } from 'react';
import PostService from '../services/post.service';

import { PostContext } from '../context/post.context';

const PostDetail = (props) => {
    const [post, setPost] = useState({title: '', body: ''});
    const [state, dispatch] = useContext(PostContext);

    useEffect(() => {
        const postId = props.match.params.id;
        const _post = state.posts.find(p => {return p.id === parseInt(postId);});
        
        if (typeof _post === undefined) {
            PostService.getPost(postId).then(res => {
                setPost(res.data);
            }).catch(e => {setPost({title: 'Post not found.', body: ''});});
        } else {
            setPost(_post);
        }
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