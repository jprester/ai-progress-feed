import React from "react";

import Loader from "../../common/Loader";
import SciPaperListItem from "./SciPaperListItem";

const createSciPaperList = (list: any, maxItems: number = 10) =>
  list.map((item: any, index: any) => {
    const { title, id, link, isoDate } = item;

    if (title && index <= maxItems) {
      return (
        <SciPaperListItem key={id} title={title} url={link} date={isoDate} />
      );
    }
  });

const SciPaperList = ({ data }: any) => {
  console.log("SciPaperList data: ", data);
  return (
    <div className="article-list-container">
      {data && data.length ? (
        <ul className="article-list">{createSciPaperList(data)}</ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SciPaperList;
