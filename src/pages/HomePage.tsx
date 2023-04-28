import React, { useEffect, useState } from "react";

import { XMLParser } from "fast-xml-parser";

import { IHomePageProps, IArticleList } from "../types/types";
import ArticleList from "../components/widgets/ArticleList/ArticleList";
import Loader from "../components/common/Loader";

import { PROXY_SERVER } from "../helpers/apiConfig";
import { parseFeedData } from "../helpers/utils";

const Home = () => {
  const feedData: any = [];

  const parser = new XMLParser();

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        name: "Object 1",
        url: "https://export.arxiv.org/api/query?search_query=cat:cs.LG&sortBy=submittedDate&sortOrder=descending",
      },
      {
        id: 2,
        name: "Object 2",
        url: "https://www.microsoft.com/en-us/research/feed/",
      },
      // ,
      // {
      //   id: 3,
      //   name: "Object 3",
      //   url: "https://jsonplaceholder.typicode.com/posts?userId=3",
      // },
    ];

    const fetchData = async () => {
      try {
        const newDataArray = await Promise.all(
          dataArray.map(async (dataObject) => {
            const response = await fetch(`${PROXY_SERVER}/${dataObject.url}`);
            const xmlResponse = await response.text();

            // feedName: entry[0],
            // webLink: entry[1].WEB_LINK,
            // type: entry[1].TYPE,
            // name: entry[1].NAME,

            const parsedResult = parser.parse(xmlResponse);

            const parsedFeedData = parseFeedData(parsedResult);

            console.log("parsedFeedData", parsedFeedData);

            return {
              feedName: dataObject.name,
              webLink: dataObject.url,
              name: dataObject.name,
              data: parsedFeedData.entry || parsedFeedData.item,
            };
          })
        );

        console.log("newDataArray", newDataArray);
        setData(newDataArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function List({ items }: { items: any[] }) {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }

  console.log("data for render: ", data);

  return (
    <div className="home-page">
      <a id="top"></a>

      {/* {data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          {Array.isArray(item.entry) && <List items={item.entry} />}
        </div>
      ))} */}

      {data && displayData(data)}
    </div>
  );
};

const displayData = (data: IArticleList[]) => {
  if (!data || data.length === 0) return <Loader />;
  return data.map((feed) => {
    if (feed.data && feed.data.length > 0) {
      return (
        <ArticleList
          data={feed.data}
          moreButton={feed.webLink}
          type={feed.type}
          name={feed.name}
          feedName={feed.feedName}
          key={feed.name}
        />
      );
    }
  });
};

export default Home;
