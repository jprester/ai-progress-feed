import React from "react";

import Loader from "../../common/Loader";
import ArticleListItem from "./ArticleListItem";
import { IArticleListProps, IArticleDataItem } from "../../../types/types";

const createArticleList = (list: IArticleDataItem[], maxItems: number = 10) =>
  list.map((item, index: number) => {
    const { title, gid, contentSnippet, link, isoDate } = item;

    if (title && index <= maxItems) {
      return (
        <ArticleListItem
          key={gid}
          title={title}
          link={link}
          contentSnippet={contentSnippet}
          isoDate={isoDate}
        />
      );
    }
  });

const ArticleList = ({ data, moreButton }: IArticleListProps) => {
  return (
    <div className="article-list-container">
      {data && data.length ? (
        <>
          <ul className="article-list">{createArticleList(data)}</ul>
          {moreButton && (
            <div className="show-more">
              <a href={moreButton} className="show-more-button">
                Show more
              </a>
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ArticleList;
