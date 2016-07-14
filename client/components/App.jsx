import React from 'react';
import SearchTweets from './SearchTweets.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Twitter Client</h1>
        <h3> Search for anything in the twittersphere... you know you want to.</h3>
        <SearchTweets />
      </div>
    );
  }

}

export default App;
