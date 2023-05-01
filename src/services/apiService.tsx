import { XMLParser } from "fast-xml-parser";

import { PROXY_SERVER } from "../helpers/apiConfig";
const parser = new XMLParser();

const fetchArticles = async (source: string) => {
  const response = await fetch(`${PROXY_SERVER}/${source}`);
  const data = await response.text();
  const parsedResult = parser.parse(data);

  return parsedResult;
};

export async function getArticles(source: string) {
  const response = await fetchArticles(source);

  return response;
}
