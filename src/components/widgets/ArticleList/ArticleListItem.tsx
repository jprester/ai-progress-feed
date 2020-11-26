import React from "react";

import { formatDate } from "../../../helpers/utils";
import { IArticleDataItem } from "../../../types/types";

const ArticleListItem = ({
  title,
  link,
  contentSnippet,
  isoDate,
  type,
}: IArticleDataItem) => {
  return (
    <li className="article-list-item">
      {isoDate && <p className="list-item-date">{formatDate(isoDate)}</p>}
      <h4 className="list-item-title">
        <a href={link}>{title}</a>
      </h4>
      {type === "videos" && (
        <iframe
          src={`https://www.youtube.com/embed/${link.replace(
            "https://www.youtube.com/watch?v=",
            ""
          )}`}
          className="video-list-mini-player"
        ></iframe>
      )}
      {type === "articles" && contentSnippet && (
        <p className="article-text-snippet">{contentSnippet}</p>
      )}
    </li>
  );
};

export default ArticleListItem;
