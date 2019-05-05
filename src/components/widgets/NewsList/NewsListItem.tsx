import React from 'react';
import { Link } from 'react-router-dom';

import { createIdFromTitle } from '../../../helpers/utils';

interface INewsListItemProps {
  title: string;
  urlToImage?: string;
}

const NewsItem: React.FC<INewsListItemProps> = ({ title, urlToImage }) => {
  return (
    <li className="news-list-item">
      {urlToImage && <img src={urlToImage} className="news-list-image" />}
      <Link to={`/news/${createIdFromTitle(title)}`}>{title}</Link>
    </li>
  );
};

export default NewsItem;
