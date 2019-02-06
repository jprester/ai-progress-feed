import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NewsItem from '../components/widgets/NewsItem';

const NewsFeed = (props: any) => {
  if (!props || !props.newsData) {
    console.log("news feed props", props);

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
  console.log("current state", state);
  return {
    newsData: state.stateData.newsData,
  }
}


export default connect(mapStateToProps)(NewsFeed);