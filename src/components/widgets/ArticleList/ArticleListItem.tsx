import React from "react";

const ArticleListItem = ({ title, url, contentSnippet, date }: any) => {
  return (
    <li className="scipaper-list-item">
      <p className="list-item-date">{date}</p>
      <h4 className="list-item-title">
        <a href={url}>{title}</a>
      </h4>
      <p className="article-text-snippet">{contentSnippet}</p>
    </li>
  );
};

export default ArticleListItem;
