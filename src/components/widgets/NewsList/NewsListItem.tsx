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
  <li className="news-list-item"> 
    <Link to={`/news/${createIdFromTitle(props.title)}`}>{props.title}</Link>
  </li>
);

export default NewsItem;
