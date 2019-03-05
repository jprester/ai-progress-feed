import React from 'react';

import SearchInputContainer from '../../containers/SearchInputContainer';
import CategorySelector from '../widgets/CategorySelector/CategorySelector';
import NewsList from '../widgets/NewsList/NewsList';

interface IHomePageProps {
  historyData: {
    match: {};
  };
  newsData: {};
  newsListNumber: number;
  clearSearchResults: any;
}

class Home extends React.Component<IHomePageProps> {
  public componentWillMount() {
    this.props.clearSearchResults();
  }

  public render() {
    return (
      <div className="home-page">
        <SearchInputContainer {...this.props} />
        <CategorySelector />
        <h1>News</h1>
        <NewsList data={this.props.newsData} listCount={this.props.newsListNumber} {...this.props}/>
      </div>
    );
  }
};

export default Home;
