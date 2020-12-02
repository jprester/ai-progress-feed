import React from "react";

import Loader from "../../common/Loader";
import ArticleListItem from "./ArticleListItem";
import { IArticleList, IArticleDataItem } from "../../../types/types";

const ArticleList = ({
  data,
  moreButton,
  name,
  type,
  feedName,
}: IArticleList) => {
  return (
    <div className="article-list-container">
      {data && data.length ? (
        <>
          <h3 className="feed-list-title" id={feedName}>
            {name}
          </h3>
          <ul className="article-list">{createArticleList(data, type)}</ul>
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

const createArticleList = (
  list: IArticleDataItem[],
  type: string,
  maxItems: number = type === "videos" ? 4 : 10
) =>
  list.map((item, index: number) => {
    const { title, contentSnippet, link, isoDate } = item;

    if (title && index <= maxItems) {
      return (
        <ArticleListItem
          key={title}
          title={title}
          link={link}
          contentSnippet={contentSnippet}
          isoDate={isoDate}
          type={type}
        />
      );
    }
  });

export default ArticleList;
