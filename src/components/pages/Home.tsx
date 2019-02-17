import React from 'react';

import NewsList from '../../containers/NewsList';

const Home = (props: any) => {
  return (
    <div>
      <h1>Home</h1>
      <p>lorem ipsum</p>

      <NewsList {...props} />
    </div>
  )
}

export default Home;