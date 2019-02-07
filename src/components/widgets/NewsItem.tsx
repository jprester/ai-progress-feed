import React from 'react';
import { BrowserRouter as Router, Link,  Route } from 'react-router-dom';

const NewsItem = (props: any) => {
  return (
    <li>
      {props.title}, <br />
      {props.date}, <br />
      <Link to={`/news${props.match.path + props.id}`}>Click</Link>
      <hr />
    </li>
  );
};

export default NewsItem;
