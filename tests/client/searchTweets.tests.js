import React from 'react';
// Alternately could use the DOM API or Jest or Enzyme
import TestUtils from 'react-addons-test-utils';
import SearchTweets from '../../client/components/SearchTweets.jsx';
const expect = require('chai').expect;

describe('SearchTweets', () => {
  const search = TestUtils.renderIntoDocument(
      <SearchTweets />
  );

  it('renders without problems', (done) => {
    expect(search).toBeDefined();
    done();
  });

  it('click on Search should invoke the searchRequest function', () => {
    const searchButton = TestUtils.findRenderedDOMComponentWithClass(
    search,
    'search-tweet-btn');
    TestUtils.Simulate.click(searchButton);
    expect(search.state.searchError.length).to.be.at.least(1);
  });
});
