import React, { useEffect } from "react";

import NewsListContainer from "../../containers/NewsListContainer";

interface ICategoryPageProps {
  historyData: {
    match: {
      params: {
        category: string;
      };
    };
  };
  newsData: [];
  newsListNumber: number;
  startNewsFetch: (category?: string) => void;
  clearData: () => void;
  setCategory: (value?: any) => void;
  showMenu: (value: boolean) => void;
}

const CategoryPage = (props: ICategoryPageProps) => {
  const {
    newsData,
    historyData,
    newsListNumber,
    clearData,
    setCategory,
    startNewsFetch,
  } = props;
  const chosenCategory = historyData.match.params.category;

  useEffect(() => {
    clearData();
    setCategory(chosenCategory);
    startNewsFetch(chosenCategory);
  }, [chosenCategory]);

  return (
    <div className="category-page">
      <h2 className="page-title">{chosenCategory}</h2>
      <NewsListContainer
        data={newsData}
        listCount={newsListNumber}
        {...props}
      />
    </div>
  );
};

export default CategoryPage;
