import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link,  Route } from 'react-router-dom';

const NewsItem = (props: any) => {
  return (
    <li>
      {props.title}, <br />
      {props.date}, <br />
      <Link to={`/news${props.match.path + props.id}`}>Click</Link>
      <hr />
    </li>
  );
};

const submit = () => {
  console.log("haha");
};

const NewsFeed = (props: any) => {
  console.log(props);

  if (!props || !props.data) {
    return <p>Didnt reciveve any data</p>;
  }

  return (
    <Fragment>
      <h1>Here are the news</h1>
      <ul>
        {
          props.data.map((item: any) => {
            return <NewsItem key={ item.id } { ...item } match={props.historyData.match} />;
          })
        }
      </ul>
    </Fragment>
);
};


export default NewsFeed;