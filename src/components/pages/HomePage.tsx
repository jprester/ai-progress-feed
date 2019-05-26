import React, { useEffect } from 'react';

import NewsListContainer from '../../containers/NewsListContainer';
import { CATEGORY } from '../../helpers/apiConfig';
import CategoryNavigation from '../widgets/CategoryNavigation/CategoryNavigation';

interface IHomePageProps {
  historyData: {
    match: {};
  };
  isFetching: boolean;
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

    if (props.isFetching === false) {
      props.clearData();
      props.setCategory('');
      props.startNewsFetch();
    }
  }, []);

  return (
    <div className="home-page">
      <h2 className="page-title">News</h2>
      <NewsListContainer data={props.newsData} listCount={props.newsListNumber} {...props}/>
    </div>
  );
};

export default Home;
