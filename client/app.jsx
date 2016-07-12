import React from 'react';
import NewWebsite from './components/newWebsite.jsx';
import AllWebsites from './components/allWebsites.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Website Archives</h1>
        <NewWebsite />
        <AllWebsites />
      </div>
    )
  }

}

export default App;
