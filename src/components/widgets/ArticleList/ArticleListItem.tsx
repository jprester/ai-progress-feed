import React from "react";

const ArticleListItem = ({ title, url, contentSnippet }: any) => {
  return (
    <li className="scipaper-list-item">
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <p>{contentSnippet}</p>
    </li>
  );
};

export default ArticleListItem;
