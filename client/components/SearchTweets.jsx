import React, { Component } from 'react';
import requests from '../utils/requests.js';
import TweetContainer from './TweetContainer.jsx';

class SearchTweets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchError: null,
    };
  }

  searchRequest(e) {
    e.preventDefault();
    const query = this.refs.query.value;
    this.refs.query.value = '';
    // reset state for every request so that it can accuratly render new errors not old
    this.setState({ searchError: null }, () => {
      if (query === '' || null) {
        return this.setState({ searchError: 'Search cannot be an empty string!' });
      }
      requests.searchTweets(query, (error, results) => {
        if (error) {
          return this.setState({
            searchError: 'Something went wrong! We are trying so hard to figure it out. We know its the worst. Please try again in a minute!',
          });
        }
        if (results.errors) {
          this.setState({
            searchError: 'We could not get the results of your search, Twitter is stingy and ONLY allows 180 every 15 min! Sawry bout it.  Hang tight!',
          });
        } else {
          this.setState({ searchResults: results.statuses });
        }
      });
    });
  }

  displayResults() {
    if (this.state.searchError !== null) {
      return <p>{this.state.searchError}</p>;
    } else if (this.state.searchResults.length >= 1) {
      return <TweetContainer searchResults={ this.state.searchResults} />;
    }
    return '';
  }

  render() {
    return (
      <div>
        <form
          className="search-tweet-form"
          type="submit"
          onSubmit={ (e) => {this.searchRequest(e); }}
        >
          <input
            className="search-tweet-query"
            label="query"
            ref="query"
            type="text"
          />
          <input
            className="search-tweet-btn"
            type="submit"
            value="Go"
          />
        </form>
          {this.displayResults()}
      </div>
    );
  }

}

export default SearchTweets;
