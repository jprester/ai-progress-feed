import React from 'react';
import { Link } from 'react-router-dom';

import { createIdFromTitle } from '../../helpers/utils';

const NewsItem = (props: any) => {
  return (
    <li>
      {props.title}, <br />
      {props.publishedAt}, <br />
      <Link to={`/news${props.match.path + createIdFromTitle(props.title)}`}>Click</Link>
      <hr />
    </li>
  );
};

export default NewsItem;
