import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from './components/Home';
import PostDetail from './components/PostDetail';

const App = () => {

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
      </Switch>
    </div>
  )
}

export default App;
