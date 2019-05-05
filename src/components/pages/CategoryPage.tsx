import React from 'react';

import NewsList from '../widgets/NewsList/NewsList';

interface ICategoryPageProps {
  historyData: {
    match: {
      params: {
        category: '',
      };
    };
  };
  newsData: [];
  newsListNumber: number;
  startNewsFetch: any;
  clearData: any;
  setCategory: any;
  showMenu: any;
}

class CategoryPage extends React.Component<ICategoryPageProps> {
  public componentDidMount() {
    this.props.clearData();
    this.props.setCategory(this.props.historyData.match.params.category);
    this.props.startNewsFetch(this.props.historyData.match.params.category);
  }

  public componentDidUpdate(prevProps: ICategoryPageProps) {
    if (this.props.historyData.match.params.category !== prevProps.historyData.match.params.category) {
      this.props.clearData();
      this.props.startNewsFetch(this.props.historyData.match.params.category);
    }
  }

  public render() {
    return (
      <div className="category-page">
        <h2 className="page-title">{this.props.historyData.match.params.category}</h2>
        <NewsList data={this.props.newsData} listCount={this.props.newsListNumber} {...this.props}/>
      </div>
    );
  }
}

export default CategoryPage;
