import React from "react";

const SciPaperListItem = ({ title, url, date }: any) => {
  return (
    <li className="scipaper-list-item">
      <p className="list-item-date">{date}</p>
      <h4 className="list-item-title">
        <a href={url}>{title}</a>
      </h4>
    </li>
  );
};

export default SciPaperListItem;
