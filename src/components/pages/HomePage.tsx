import _ from 'lodash';
import React, { useEffect } from 'react';

import { CATEGORY } from '../../helpers/apiConfig';
import CategoryNavigation from '../widgets/CategoryNavigation/CategoryNavigation';
import NewsList from '../widgets/NewsList/NewsList';

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

const Home: React.FC<IHomePageProps> = (props) => {
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
