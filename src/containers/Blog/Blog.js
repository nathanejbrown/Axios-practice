import React, { Component } from 'react';
//import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
              <header>
                <nav>
                  <ul>
                    <li><NavLink
                      //the active params only work with NavLink, not Link.
                      exact
                      to="/posts"
                      activeStyle={{
                        color: '#fa923f'
                      }}>Posts</NavLink></li>
                    <li><NavLink to={{
                      pathname: '/new-post',
                      hash: '#submit',
                      search: '?quick-submit=true'
                    }}>New Post</NavLink></li>
                  </ul>
                </nav>
              </header>
              {/* <Route path="/" exact render={() => <Posts />} />
              <Route path="/" exact render={() => <h1>Home</h1>} /> */}

              {/* Switch causes the router to stop once it finds a matching route, i.e it won't load /new-posts AND /:id */}
              <Switch>
                <Route path="/new-post" component={NewPost} />
                <Route path="/posts" component={Posts} />
              </Switch>
            </div>
        );
    }
}

export default Blog;
