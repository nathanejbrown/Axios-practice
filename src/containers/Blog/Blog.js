import React, { Component } from 'react';
//import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';
import './Blog.css';
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});


class Blog extends Component {
  state = {
    auth: true
  }

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
                {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                <Route path="/posts" component={Posts} />
                <Route render={() => <h1>Not Found</h1>} />
                {/* <Redirect from="/" to="/posts" /> */}
              </Switch>
            </div>
        );
    }
}

export default Blog;
