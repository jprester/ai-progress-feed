import React from "react";

import Loader from "../../common/Loader";
import ArticleListItem from "./ArticleListItem";

const createArticleList = (list: any, maxItems: number = 10) =>
  list.map((item: any, index: any) => {
    const { title, gid, contentSnippet, link } = item;

    if (title && index <= maxItems) {
      return (
        <ArticleListItem
          key={gid}
          title={title}
          url={link}
          contentSnippet={contentSnippet}
        />
      );
    }
  });

const ArticleList = ({ data }: any) => {
  return (
    <div className="news-list-container">
      {data && data.length ? (
        <ul className="news-list">{createArticleList(data)}</ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ArticleList;
