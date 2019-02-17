import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { createIdFromTitle } from '../../helpers/utils';
import NewsListItem from './NewsListItem';

interface INewsListProps {
  historyData: {
    match: {},
  };
  newsData: [];
}

const NewsList: React.FC<INewsListProps> = (props) => {
  if (!props || !Array.isArray(props.newsData) || !props.newsData.length) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>Here are the news</h1>
      <ul>
        {
          props.newsData.map((item: any) => {
            return <NewsListItem key={ createIdFromTitle(item.title) } { ...item } match={props.historyData.match} />;
          })
        }
      </ul>
    </Fragment>
  );
};

export default NewsList;
