import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { showMoreItems } from '../../../actions/';
import { createIdFromTitle } from '../../../helpers/utils';
import NewsListItem from './NewsListItem';

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
    return <p>Loading...</p>;
  }

  const listNumber = props.data.slice(0, props.listCount) || [];

  return (
    <div>
      <ul>
        {
          listNumber.map((item: any) => {
            return <NewsListItem key={ createIdFromTitle(item.title) } { ...item } match={props.historyData.match} />;
          })
        }
      </ul>

      <button onClick={(event) => onShowMoreButtonClick(event, props)}>Show More</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  showMoreItems: () => dispatch(showMoreItems()),
});

export default connect(null, mapDispatchToProps)(NewsList);
