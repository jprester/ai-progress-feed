import React from 'react';
import { Link } from 'react-router-dom';

import { createIdFromTitle } from '../../../helpers/utils';

interface INewsListItemProps {
  match: {
    path: string,
  };
  title: string;
  publishedAt: string;
}

const NewsItem: React.FC<INewsListItemProps> = (props) => (
  <li>
    {props.title}, <br />
    {props.publishedAt}, <br />
    <Link to={`/news/${createIdFromTitle(props.title)}`}>Click</Link>
    <hr />
  </li>
);

export default NewsItem;
