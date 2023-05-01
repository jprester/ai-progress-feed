import { useContext, useEffect } from "react";

import { XMLParser } from "fast-xml-parser";

import { IArticleList } from "../types/types";
import ArticleList from "../components/widgets/ArticleList/ArticleList";
import Loader from "../components/common/Loader";

import { PROXY_SERVER, FEED_SOURCES } from "../helpers/apiConfig";
import { parseFeedData } from "../helpers/utils";
import RequestDataContext from "../context/RequestDataContext";

const Home = () => {
  const parser = new XMLParser();

  const { requestData, setRequestData } = useContext(RequestDataContext);

  useEffect(() => {
    const feedRequestData = Object.entries(FEED_SOURCES).map(
      ([key, value]) => ({
        id: key.toUpperCase(),
        ...value,
      })
    );

    const fetchData = async () => {
      try {
        const newDataArray = await Promise.all(
          feedRequestData.map(async (dataObject) => {
            const response = await fetch(`${PROXY_SERVER}/${dataObject.FEED}`);
            const xmlResponse = await response.text();
            const parsedResult = parser.parse(xmlResponse);
            const parsedFeedData = parseFeedData(parsedResult);

            return {
              feedName: dataObject.NAME,
              webLink: dataObject.WEB_LINK,
              name: dataObject.NAME,
              type: dataObject.TYPE,
              data: parsedFeedData.entry || parsedFeedData.item,
            };
          })
        );
        setRequestData(
          newDataArray
            .filter((item) => item?.data?.length > 0)
            .sort((a, b) => {
              // Sort entries by the date of the first article
              if (a.data[0].published < b.data[0].published) return 1;
              if (a.data[0].published > b.data[0].published) return -1;
              return 0;
            })
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home-page">
      <a id="top"></a>

      {requestData && displayData(requestData)}
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
