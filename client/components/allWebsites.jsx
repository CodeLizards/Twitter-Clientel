import React from 'react';
import requests from '../utils/requests.js';

class AllWebsites extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      websites: {},
    };
  }

  getWebsites() {
    requests.getWebsites((error, results) => {
      this.setState({ websites: results });
    });
  }

  displayWebsites() {
    const websites = this.state.websites;
    return Object.keys(websites).map((entry) => (
        <div className="website-entry" key={entry}>
          <p>URL: {websites[entry].name}</p>
          <p>Description: {websites[entry].description || 'None'}</p>
          <p>Time Created: {this.parseTime(websites[entry].time_posted)}</p>
        </div>
      )
    );
  }

  parseTime(date) {
    let time = new Date(date);
    time = time.toLocaleString();
    console.log(time);
    const newTime = time.slice(11) + " on " + time.slice(0, 9);
    return newTime;
  }

  render() {
    return (
      <div className="all-websites">
        <button className="all-websites-btn" onClick={ () => { this.getWebsites(); }}>Get Valid Websites</button>
        <div className="all-websites-body">
          {this.displayWebsites()}
        </div>
      </div>
    );
  }

}

export default AllWebsites;
