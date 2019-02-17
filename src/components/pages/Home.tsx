import React from 'react';

import NewsListContainer from '../../containers/NewsListContainer';

const Home = (props:any) => {
  return (
    <div>
      <h1>Home</h1>
      <p>lorem ipsum</p>

      <NewsListContainer {...props}/>
    </div>
  )
}

export default Home;
