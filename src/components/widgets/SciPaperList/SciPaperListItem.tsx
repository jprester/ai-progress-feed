import React from "react";

import { formatDate } from "../../../helpers/utils";
import { ISciPaperDataItem } from "../../../types/types";

const SciPaperListItem = ({ title, link, isoDate }: ISciPaperDataItem) => {
  return (
    <li className="scipaper-list-item">
      <p className="list-item-date">{formatDate(isoDate)}</p>
      <h4 className="list-item-title">
        <a href={link}>{title}</a>
      </h4>
    </li>
  );
};

export default SciPaperListItem;
