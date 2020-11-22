import React from "react";

import Loader from "../../common/Loader";
import SciPaperListItem from "./SciPaperListItem";
import { ISciPaperListProps, ISciPaperDataItem } from "../../../types/types";

const createSciPaperList = (list: ISciPaperDataItem[], maxItems: number = 10) =>
  list.map((item, index: number) => {
    const { title, id, link, isoDate } = item;

    if (title && index <= maxItems) {
      return (
        <SciPaperListItem
          key={id}
          title={title}
          link={link}
          isoDate={isoDate}
        />
      );
    }
  });

const SciPaperList = ({ data, moreButton }: ISciPaperListProps) => {
  return (
    <div className="article-list-container">
      {data && data.length ? (
        <>
          <ul className="article-list">{createSciPaperList(data)}</ul>
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

export default SciPaperList;
