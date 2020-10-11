import React from "react";

import Loader from "../../common/Loader";
import VideoListItem from "./VideoListItem";
import { IVideoListProps, IArticleDataItem } from "../../../types/types";

const createVideoList = (list: IArticleDataItem[], maxItems: number = 3) =>
  list.map((item, index: number) => {
    const { title, gid, contentSnippet, link, isoDate } = item;

    if (title && index <= maxItems) {
      return (
        <VideoListItem
          key={gid}
          title={title}
          link={link}
          contentSnippet={contentSnippet}
          isoDate={isoDate}
        />
      );
    }
  });

const VideoList = ({ data, moreButton }: IVideoListProps) => {
  return (
    <div className="video-list-container">
      {data && data.length ? (
        <>
          <ul className="video-list">{createVideoList(data)}</ul>
          {moreButton && (
            <div>
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

export default VideoList;