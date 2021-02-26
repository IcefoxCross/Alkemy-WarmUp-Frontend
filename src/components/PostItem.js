import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({post}) => {

    return (
        <tr>
            <td className="align-middle">{post.title}</td>
            <td>
                <div className="d-flex flex-row">
                    <Link to={`/view/${post.id}`}><button className="btn btn-primary mr-2"><i className="fa fa-eye"></i></button></Link>
                    <Link to={`/edit/${post.id}`}><button className="btn btn-success mr-2"><i className="fa fa-pencil"></i></button></Link>
                    <button className="btn btn-danger" onClick={() => {}}><i className="fa fa-trash"></i></button>
                </div>
            </td>
        </tr>
    )
}

export default PostItem