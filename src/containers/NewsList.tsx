import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NewsListItem from '../components/widgets/NewsListItem';
import { createIdFromTitle } from '../helpers/utils';

interface INewsFeedProps {
  historyData: {
    match: {},
  };
  newsData: [];
}

const NewsFeed: React.FC<INewsFeedProps> = (props) => {
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

const mapStateToProps = (state: any) => {
  return {
    newsData: state.newsData,
  };
};

export default connect(mapStateToProps)(NewsFeed);
