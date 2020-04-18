import axios from "axios";

import {
  API_KEY,
  CATEGORY,
  COUNTRY,
  HOST,
  MAX_RESULTS,
  VERSION,
} from "../helpers/apiConfig";

export async function getTopHeadlines(
  category = CATEGORY.ALL,
  country = COUNTRY.US,
  pageSize = MAX_RESULTS
) {
  const url = `${HOST}/${VERSION}/top-headlines?country=${country}&pageSize=${pageSize}&category=${category}&apiKey=${API_KEY}`;

  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function searchAllArticles(query: string, pageSize = MAX_RESULTS) {
  if (!query) {
    return;
  }

  const url = `${HOST}/${VERSION}/everything?q=${query}&apiKey=${API_KEY}&pagesize=${pageSize}`;

  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
