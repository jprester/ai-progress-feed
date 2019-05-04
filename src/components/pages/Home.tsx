import React, { useEffect } from 'react';
import _ from 'lodash';

import CategoryNavigation from '../widgets/CategoryNavigation/CategoryNavigation';
import NewsList from '../widgets/NewsList/NewsList';
import { CATEGORY } from '../../helpers/apiConfig';

interface IHomePageProps {
  historyData: {
    match: {};
  };
  newsData: [];
  newsListNumber: number;
  startNewsFetch: any;
  clearData: any;
  category: string;
  setCategory: any;
}

const Home = (props: IHomePageProps) => {
  useEffect(() => {
    const newsData = props.newsData || [];

    if (props.category || !newsData.length) {
      props.clearData();
      props.setCategory();
      props.startNewsFetch();
    }
  }, []);

  return (
    <div className="home-page">
      <h2 className="page-title">News</h2>
      <NewsList data={props.newsData} listCount={props.newsListNumber} {...props}/>
    </div>
  );
};

export default Home;
