import React from "react";

const SciPaperListItem = ({ title, url }: any) => {
  return (
    <li className="scipaper-list-item">
      <h3>
        <a href={url}>{title}</a>
      </h3>
    </li>
  );
};

export default SciPaperListItem;
