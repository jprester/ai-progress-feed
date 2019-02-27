import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { createIdFromTitle } from '../../../helpers/utils';
import NewsListItem from './NewsListItem';

interface INewsListProps {
  historyData: {
    match: {},
  };
  data: {};
}

const NewsList: React.FC<INewsListProps> = (props) => {
  if (!props || !Array.isArray(props.data) || !props.data.length) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {
        props.data.map((item: any) => {
          return <NewsListItem key={ createIdFromTitle(item.title) } { ...item } match={props.historyData.match} />;
        })
      }
    </ul>
  );
};

export default NewsList;
