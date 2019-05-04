import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { showMoreItems } from '../../../actions/';
import { createIdFromTitle } from '../../../helpers/utils';
import NewsListItem from './NewsListItem';
import Loader from '../../common/Loader';

interface INewsListProps {
  historyData: {
    match: {},
  };
  data: {};
  listCount: number;
}

function onShowMoreButtonClick(event: any, props: any) {
  if (props.showMoreItems) {
    setTimeout(() => {
      props.showMoreItems();
    }, 500);
  }
}

const NewsList: React.FC<INewsListProps> = (props) => {
  if (!props || !Array.isArray(props.data) || !props.data.length) {
    return <Loader />;
  }

  const listNumber = props.data.slice(0, props.listCount) || [];

  return (
    <div className="news-list-container">
      <ul className="news-list">
        {
          listNumber.map((item: any) => {
            return <NewsListItem key={ createIdFromTitle(item.title) } { ...item } />;
          })
        }
      </ul>
      <div className="show-more-button-container">
        <button className="show-more-button" onClick={(event) => onShowMoreButtonClick(event, props)}>Show More</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  showMoreItems: () => dispatch(showMoreItems()),
});

export default connect(null, mapDispatchToProps)(NewsList);
