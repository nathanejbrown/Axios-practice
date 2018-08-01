import React from 'react';
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {
  //this is only here to demonstrate using withRouter() to pass Router props from a stateful component (props) to a stateless one.

  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  )
};

export default withRouter(post);
