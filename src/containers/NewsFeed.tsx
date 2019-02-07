import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NewsItem from '../components/widgets/NewsItem';

interface INewsFeedProps {
  historyData: {
    match: {},
  };
  newsData: [];
}

const NewsFeed: React.FC<INewsFeedProps> = props => {
  if (!props || !props.newsData) {
    return <p>Didnt recieve any data</p>;
  }

  return (
    <Fragment>
      <h1>Here are the news</h1>
      <ul>
        {
          props.newsData.map((item: any) => {
            return <NewsItem key={ item.id } { ...item } match={props.historyData.match} />;
          })
        }
      </ul>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    newsData: state.newsData,
  }
}


export default connect(mapStateToProps)(NewsFeed);