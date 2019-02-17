import axios from 'axios';

import { API_KEY, CATEGORY, COUNTRY, HOST, VERSION } from '../helpers/apiConfig';

export async function getTopHeadlines() {
  const url = `${HOST}/${VERSION}/top-headlines?country=${COUNTRY.US}&apiKey=${API_KEY}`;

  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
