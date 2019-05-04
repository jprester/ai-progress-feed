import _ from 'lodash';
import React from 'react';

import { createIdFromTitle } from '../../helpers/utils';
import Loader from '../common/Loader';

interface IExtendedNewsItemProps {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
}

const NewsPageContent = (props: any) => {
  if (props.data && props.data.length) {
      const newArray = props.data.map((item: any) => {
        item.id = createIdFromTitle(item.title);

        return item;
      });

      const newsObject = newArray.find((item: IExtendedNewsItemProps) => item.id === props.match.params.id) || {};

      if (_.isEmpty(newsObject)) {
        return <div>Sorry. Couldnt find the news article.</div>;
      }

      return (
        <div>
          <h2 className="page-title">{newsObject.title}</h2>
          <h5 className="news-page-description">{newsObject.description}</h5>
          <p className="news-page-content">{newsObject.content}</p>
          <p className="news-page-url"><a href={newsObject.url}>{newsObject.url}</a></p>
        </div>
      );
  } else {
      return (
        <Loader />
      );
  }
};

export default NewsPageContent;
