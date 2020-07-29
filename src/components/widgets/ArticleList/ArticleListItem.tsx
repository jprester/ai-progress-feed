import React from "react";

import { formatDate } from "../../../helpers/utils";
import { IArticleDataItem } from "../../../types/types";

const ArticleListItem = ({
  title,
  link,
  contentSnippet,
  isoDate,
}: IArticleDataItem) => {
  return (
    <li className="scipaper-list-item">
      <p className="list-item-date">{formatDate(isoDate)}</p>
      <h4 className="list-item-title">
        <a href={link}>{title}</a>
      </h4>
      <p className="article-text-snippet">{contentSnippet}</p>
    </li>
  );
};

export default ArticleListItem;
