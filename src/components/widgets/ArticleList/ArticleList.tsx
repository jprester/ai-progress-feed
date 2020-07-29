import React from "react";

import Loader from "../../common/Loader";
import ArticleListItem from "./ArticleListItem";

const createArticleList = (list: any, maxItems: number = 10) =>
  list.map((item: any, index: any) => {
    const { title, gid, contentSnippet, link, isoDate } = item;

    if (title && index <= maxItems) {
      return (
        <ArticleListItem
          key={gid}
          title={title}
          url={link}
          contentSnippet={contentSnippet}
          date={isoDate}
        />
      );
    }
  });

const ArticleList = ({ data }: any) => {
  return (
    <div className="article-list-container">
      {data && data.length ? (
        <ul className="article-list">{createArticleList(data)}</ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ArticleList;
