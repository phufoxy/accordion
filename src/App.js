import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Headeing" content="content items 1" ></Accordion>
        <Accordion heading="Headeing" content="content items 1" ></Accordion>
        <Accordion heading="Headeing" content="content items 1" ></Accordion>
        <Accordion heading="Headeing" content="content items 1" ></Accordion>
      </div>
    );
  }
}

export default App;
