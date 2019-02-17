import React from 'react';

import { createIdFromTitle } from '../../helpers/utils';

interface INewsPageProps {
  newsData: [];
  match: {
    params: {
      id: string;
    },
  };
}

interface IExtendedNewsItemProps {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
}

const NewsPageContent = (props: INewsPageProps) => {
  if (props.newsData) {
      const newArray = props.newsData.map((item: any) => {
        item.id = createIdFromTitle(item.title);

        return item;
      });

      const newsObject = newArray.find((item: IExtendedNewsItemProps) => item.id === props.match.params.id) || {};

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
