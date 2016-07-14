import React, { Component, PropTypes } from 'react';
import TweetEntry from './TweetEntry.jsx';

class TweetContainer extends Component {

  constructor(props) {
    super(props);
  }

  displayTweets() {
    const tweets = this.props.searchResults;
    if (this.props.searchResults) {
      return (
        tweets.map((tweet, i) =>
            <TweetEntry key={i} tweet={tweet} />
          )
      );
    }
  }

  render() {
    return (
      // Try binding onUpdate to this scope to see if it breaks
      <div className="video-list media">
        {this.displayTweets()}
      </div>
    );
  }
}

TweetContainer.propTypes = {
  searchResults: PropTypes.array,
};

export default TweetContainer;
