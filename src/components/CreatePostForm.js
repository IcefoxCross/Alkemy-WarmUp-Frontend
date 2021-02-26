import React, { useState, useContext, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import PostService from '../services/post.service';
import { PostContext } from '../context/post.context';

const required = value => {
    if (!value) {
        return(
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
}

const CreatePostForm = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState('');
    const [state, dispatch] = useContext(PostContext);

    const form = useRef();
    const checkBtn = useRef();

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeBody = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage('');
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            PostService.createPost(title, body, 1).then((res) => {
                setMessage('Post created!');
                setSuccessful(true);
                let post = res.data;
                post.id = state.posts.length + 1;
                dispatch({
                    type: 'CREATE_POST',
                    payload: post
                });
                props.history.push('/home');
            }, (error) => {
                const resMessage = (error.response && error.response.data && error.response.data.message)
                    || error.message || error.toString();
                setSuccessful(false);
                setMessage(resMessage);
            })
        }
    };

    return (
        <div className="container mt-3 col-md-6">
            <div className="card card-container">
                <Form onSubmit={handleSubmit} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Input type="text" className="form-control" name="title"
                                    value={title} onChange={onChangeTitle} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="body">Body</label>
                                <Input type="textarea" rows="5" className="form-control" name="body"
                                    value={body} onChange={onChangeBody} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Add Post</button>
                            </div>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div className={successful ? 'alert alert-success' : 'alert alert-danger'}
                                role="alert">
                                    {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{display: "none"}} ref={checkBtn} />
                </Form>
            </div>
        </div>
    )
};

export default CreatePostForm;
