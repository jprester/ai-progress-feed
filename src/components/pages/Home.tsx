import React from 'react';

import NewsList from '../widgets/NewsList/NewsList';
import SearchInputContainer from '../../containers/SearchInputContainer';
import CategorySelector from '../widgets/CategorySelector/CategorySelector';

interface IHomePageProps {
  historyData: {
    match: {};
  };
  newsData: {};
}

const Home: React.FC<IHomePageProps> = (props) => {
  return (
    <div className="home-page">
      <SearchInputContainer {...props} />
      <CategorySelector />
      <h1>News</h1>
      <NewsList data={props.newsData} {...props}/>
    </div>
  );
};

export default Home;
