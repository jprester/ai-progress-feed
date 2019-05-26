import React, { Fragment } from 'react';

import { showMoreItems } from '../../../actions/';
import { createIdFromTitle } from '../../../helpers/utils';
import Loader from '../../common/Loader';
import NewsListItem from './NewsListItem';

interface INewsListProps {
  historyData: {
    match: {},
  };
  data: INewsListItemProps[];
  listCount: number;
  showMoreItems: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface INewsListItemProps {
  author: string;
  content: string;
  publishedAt: string;
  source: {};
  title: string;
  url: string;
  urlToImage: string;
}

const createList = (list: INewsListItemProps[]) => (
  list.map((item: INewsListItemProps, index: any) => {
    const { title, urlToImage } = item;

    if (title && urlToImage && index === 0) {
      return <NewsListItem urlToImage={urlToImage} key={title} title={title} />
    }

    if (title) {
      return <NewsListItem key={title} title={title} />;
    }

    return <div key={title}>Didn't get correct news data</div>;

  })
);

const NewsList: React.FC<INewsListProps> = (props) => {
  if (!props || !Array.isArray(props.data) || !props.data.length) {
    return <Loader />;
  }

  const { data } = props;
  const listData = data.slice(0, props.listCount);

  return (
    <div className="news-list-container">
      <ul className="news-list">
        {createList(listData)}
      </ul>
      <div className="show-more-button-container">
        <button className="show-more-button" onClick={props.showMoreItems}>Show More</button>
      </div>
    </div>
  );
};

export default NewsList;
