import React from "react";

import { formatDate } from "../../../helpers/utils";
import { IArticleDataItem } from "../../../types/types";

const VideoListItem = ({ title, link, isoDate }: IArticleDataItem) => {
  return (
    <li className="video-list-item">
      <p className="list-item-date">{formatDate(isoDate)}</p>
      <h4 className="list-item-title">
        <a href={link}>{title}</a>
      </h4>
      <iframe
        src={`https://www.youtube.com/embed/${link.replace(
          "https://www.youtube.com/watch?v=",
          ""
        )}`}
        className="video-list-mini-player"
      ></iframe>
    </li>
  );
};

export default VideoListItem;
