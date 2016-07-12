import React from 'react';
import requests from '../utils/requests.js';

class newWebsite extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  postWebsite(e) {
    e.preventDefault();
    const website = this.refs.newSite.value;
    const description = this.refs.newSiteDescription.value;
    this.refs.newSite.value = '';
    this.refs.newSiteDescription.value = '';

    const filteredWebsite = this.filterWebsite(website);
    requests.postWebsite({name: filteredWebsite, description}, () => {
      console.log('Your website has been posted', filteredWebsite);
    });
  }

  filterWebsite(site) {
    let website = site;
    const regex = 'http:\/\/.*';
    const regex1 = 'https:\/\/.*';
    if (website.match(regex1)) {
      website = website.slice(8);
    } else if (website.match(regex)) {
      website = website.slice(7);
    }
    const regex2 = 'www.*\..*\/*';
    if (website.match(regex2)) {
      website = website.slice(4);
    }
    const regex3 = '.*\..*\/.*';
    if (website.match(regex3)) {
      const afterSlash = website.indexOf('/');
      website = website.slice(afterSlash, website.length);
    }
    return website;
  }

  render() {
    return (
      <div>
       <h4>Input a new website</h4>
       <form className="new-website-form" type="submit" onSubmit={ (e) => {this.postWebsite(e); }}>
          <label>URL</label>
          <input className="new-website-name" label="url" ref="newSite" type="text" />
          <label>Description</label>
          <input className="new-website-description" label="description" ref="newSiteDescription" type="text" />
          <input className="new-website-btn" type="submit" />
        </form>
      </div>
    );
  }

}

export default newWebsite;
