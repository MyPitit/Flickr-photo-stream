import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stream from './Stream.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Flickr Photo Stream</h2>
        </div>
        <Stream source="https://api.flickr.com/services/feeds/photos_public.gne?format=json" />
      </div>
    );
  }
}

export default App;
