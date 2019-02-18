import React, { Component } from 'react';
import Navigation from './navigation';
import Collection from '../model/collection.js';

class Settings extends Component {

  componentWillMount() {
    let collection = new Collection();
    console.log("here");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation/>
          <h1>Jida Test SETTINGS</h1>
        </header>
      </div>
    );
  }
}

export default Settings;