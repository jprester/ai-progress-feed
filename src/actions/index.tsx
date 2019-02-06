import { newsData as data } from '../helpers/dummyData';
import { FETCH_NEWS } from './types';

export const fetchNews = () => ({
  type: FETCH_NEWS,
  payload: data,
});