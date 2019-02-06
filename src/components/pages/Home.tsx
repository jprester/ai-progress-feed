import React from 'react';

import NewsFeed from '../../containers/NewsFeed';

const Home = (props: any) => {
  return (
    <div>
      <h1>Home</h1>
      <p>lorem ipsum</p>

      <NewsFeed {...props} />
    </div>
  )
}

export default Home;