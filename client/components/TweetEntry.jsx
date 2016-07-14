import React, { Component, PropTypes } from 'react';

class TweetEntry extends Component {

  render() {
    const tweet = this.props.tweet;
    return (
      <div className="tweet">
        <p>{tweet.text}</p>
        <p>{tweet.created_at.slice(0, tweet.created_at.length - 14)} by {tweet.user.name}</p>
      </div>
    );
  }

}

TweetEntry.propTypes = {
  tweet: PropTypes.object,
};

export default TweetEntry;
