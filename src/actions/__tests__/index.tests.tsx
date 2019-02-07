import { fetchNews } from '../';
import { FETCH_NEWS } from '../types';

describe('fetchNews', () => {
  it('has correct type', () => {
    const action = fetchNews();

    expect(action.type).toEqual(FETCH_NEWS);
  });
});
