import React, { Fragment } from "react";

import { showMoreItems } from "../../../actions/";
import { createIdFromTitle } from "../../../helpers/utils";
import Loader from "../../common/Loader";
import NewsListItem from "./NewsListItem";
import ShowMoreButton from "./ShowMoreButton";

interface INewsListProps {
  historyData: {
    match: {};
  };
  data: INewsListItemProps[];
}

interface INewsListItemProps {
  author: string;
  content: string;
  publishedAt: string;
  source: {};
  title: string;
  url: string;
  urlToImage: string;
}

const createList = (list: any) =>
  list.map((item: INewsListItemProps, index: any) => {
    const { title, urlToImage } = item;

    if (title && urlToImage && index === 0) {
      return <NewsListItem urlToImage={urlToImage} key={title} title={title} />;
    }

    if (title) {
      return <NewsListItem key={title} title={title} />;
    }

    return <div key={title}>Didn't get correct news data</div>;
  });

const NewsList = (props: any) => {
  if (!props || !Array.isArray(props.data) || !props.data.length) {
    return <Loader />;
  }

  const { data } = props;

  return (
    <div className="news-list-container">
      <ul className="news-list">{createList(data)}</ul>
    </div>
  );
};

export default NewsList;
