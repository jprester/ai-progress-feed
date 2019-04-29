import React from 'react';
import _ from 'lodash';

import { createIdFromTitle } from '../../helpers/utils';

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
          <h3>{newsObject.title}</h3>
          <h5>{newsObject.description}</h5>
          <p>{newsObject.content}</p>
          <p><a href={newsObject.url}>{newsObject.url}</a></p>
        </div>
      );
  } else {
      return (
        <div>
          <p>loading</p>
        </div>
      );
  }
};

export default NewsPageContent;
