import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import SearchTweets from '../../client/components/SearchTweets.jsx';

describe('SearchTweets', () => {
  const search = TestUtils.renderIntoDocument(
      <SearchTweets />
  );

  it('renders without problems', (done) => {
    expect(search).toBeDefined();
    done();
  });
});
