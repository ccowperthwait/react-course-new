import React, { Component } from 'react';
import './App.css';
import InputField from './InputField/InputField.js';
import OutputTextArea from './OutputTextArea/OutputTextArea.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <InputField />
      <OutputTextArea />
      </div>
    );
  }
}

export default App;
