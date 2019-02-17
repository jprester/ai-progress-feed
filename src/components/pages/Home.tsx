import React from 'react';

import NewsListContainer from '../../containers/NewsListContainer';

interface IHomePageProps {
  historyData: {
    match: {};
  };
}

const Home: React.FC<IHomePageProps> = (props) => {
  return (
    <div className="home-page">
      <h1>News</h1>
      <NewsListContainer {...props}/>
    </div>
  )
}

export default Home;
