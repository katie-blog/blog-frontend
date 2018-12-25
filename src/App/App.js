import React, { Component } from 'react';
import './App.scss';
import Routes from '../routes'

class App extends Component {
  render() {
    return (
      <div id="blog-app">
        <Routes></Routes>
      </div>
    );
  }
}

export default App;
