import React from 'react';
import { Link } from 'react-router-dom';

import { createIdFromTitle } from '../../../helpers/utils';

interface INewsListItemProps {
  title: string;
}

const NewsItem: React.FC<INewsListItemProps> = ({ title }) => {
  return (<li className="news-list-item">
    <Link to={`/news/${createIdFromTitle(title)}`}>{title}</Link>
  </li>);
};

export default NewsItem;
