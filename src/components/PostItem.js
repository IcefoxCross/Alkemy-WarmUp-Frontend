import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import { PostContext } from '../context/post.context';
import PostService from '../services/post.service';

const PostItem = ({post}) => {

    const [state, dispatch] = useContext(PostContext);

    const deletePost = () => {
        if (window.confirm(`Delete Post?`)) {
            PostService.deletePost(post.id).then(res => {
                dispatch({
                    type: 'DELETE_POST',
                    payload: {id: post.id}
                });
            });
        }
    };

    return (
        <tr>
            <td className="align-middle">{post.title}</td>
            <td>
                <div className="d-flex flex-row">
                    <Link to={`/view/${post.id}`}><button className="btn btn-primary mr-2"><i className="fa fa-eye"></i></button></Link>
                    <Link to={`/edit/${post.id}`}><button className="btn btn-success mr-2"><i className="fa fa-pencil"></i></button></Link>
                    <button className="btn btn-danger" onClick={() => {deletePost()}}><i className="fa fa-trash"></i></button>
                </div>
            </td>
        </tr>
    )
}

export default PostItem