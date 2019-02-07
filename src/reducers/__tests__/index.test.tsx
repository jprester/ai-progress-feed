import reducer from '../';
import { FETCH_NEWS } from '../../actions/types';

it('handles the actions of fetch news', () => {
  const action = {
    type: FETCH_NEWS,
    payload: [{
      "id": 1,
      "title": "some news 1",
      "content": "some news content 1",
      "date": "21.11.2017"
    }, {
    "id": 2,
    "title": "some news 2",
    "content": "some news content 2",
    "date": "22.11.2017"
  }],
  };

  const newState = reducer({"newsData":[]}, action);

  expect(newState).toEqual({
      "newsData": [
        {"content": "some news content 1", "date": "21.11.2017", "id": 1, "title": "some news 1"},
        {"content": "some news content 2", "date": "22.11.2017", "id": 2, "title": "some news 2"}
      ],
    });
});
