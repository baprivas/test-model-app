import React, { Component } from 'react';
import Navigation from './navigation';
import Collection from '../model/collection.js';

class Home extends Component {

  componentWillMount() {
    let collection = new Collection();
    console.log("here");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
          <h1>Jida Test HOME</h1>
        </header>
      </div>
    );
  }
}

export default Home;