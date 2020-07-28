import React from "react";

import Loader from "../../common/Loader";
import SciPaperListItem from "./SciPaperListItem";

const createSciPaperList = (list: any, maxItems: number = 10) =>
  list.map((item: any, index: any) => {
    const { title, id, link } = item;

    if (title && index <= maxItems) {
      return <SciPaperListItem key={id} title={title} url={link} />;
    }
  });

const SciPaperList = ({ data }: any) => {
  return (
    <div className="news-list-container">
      {data && data.length ? (
        <ul className="news-list">{createSciPaperList(data)}</ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SciPaperList;
