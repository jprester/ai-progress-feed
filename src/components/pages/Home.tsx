import React from 'react';

import SearchInputContainer from '../../containers/SearchInputContainer';
import CategoryNavigation from '../widgets/CategoryNavigation/CategoryNavigation';
import NewsList from '../widgets/NewsList/NewsList';
import { CATEGORY } from '../../helpers/apiConfig';

interface IHomePageProps {
  historyData: {
    match: {};
  };
  newsData: {};
  newsListNumber: number;
  startNewsFetch: any;
  clearData: any;
}

class Home extends React.Component<IHomePageProps> {
  public componentWillMount() {
    this.props.clearData();
  }

  public componentDidMount() {
    this.props.startNewsFetch();
  }

  public render() {
    return (
      <div className="home-page">
        <SearchInputContainer {...this.props} />
        <CategoryNavigation data={CATEGORY}/>
        <h1>News</h1>
        <NewsList data={this.props.newsData} listCount={this.props.newsListNumber} {...this.props}/>
      </div>
    );
  }
};

export default Home;
