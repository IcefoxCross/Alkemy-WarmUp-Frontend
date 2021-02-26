import React, { useContext, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { PostContext } from './context/post.context';
import PostService from './services/post.service';

import Home from './components/Home';
import PostDetail from './components/PostDetail';
import CreatePostForm from './components/CreatePostForm';


const App = () => {
  const [state, dispatch] = useContext(PostContext);
    useEffect(() => {
        if (state.posts.length === 0) {
            PostService.getPosts().then(res => {
                dispatch({
                    type: 'FETCH_POSTS',
                    payload: res.data
                });
            });
        }
    }, []);

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={'/'} className="navbar-brand">Alkemy Posts</Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={'/home'} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={'/new'} className="nav-link">Add Post</Link>
          </li>
        </div>
      </nav>

      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route path={'/view/:id'} component={PostDetail} />
        <Route exact path={'/new'} component={CreatePostForm} />
      </Switch>
    </div>
  )
}

export default App;
