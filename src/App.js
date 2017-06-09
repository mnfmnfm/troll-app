import React, { Component } from 'react';
import logo from './logo.svg';
import Doll from './Doll.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Trolls</h2>
        </div>
        Welcome to the world of trolls!

        <Doll name="Grog" hairColor={0} />
        <Doll name="Sparkle" hairColor={2} />
        <Doll name="Arghhhh" hairColor={3} />
      </div>
    );
  }
}

export default App;
