import { createIdFromTitle } from '../utils';

describe('createIdFromTitle', () => {
  it('should return empty string if the argument that is passed is undefined or not a string', () => {
    expect(createIdFromTitle()).toBe('');
  });

  it('should create sanitized url based on the title of the article if the argument is correct', () => {
    const testString = 'Some url To be passed';
    expect(createIdFromTitle(testString)).toBe('some-url-to-be-passed');
  });
});
