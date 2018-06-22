import React, { Component } from 'react';
import './App.css';
import InputField from './InputField/InputField.js';
import OutputTextArea from './OutputTextArea/OutputTextArea.js';

class App extends Component {
  state = {
    text: "This is the initial text."
  };

render() {

    return (
      <div className="App">
      <InputField initialvalue={this.state.text} />
      <OutputTextArea />
      </div>
    );
  }
}

export default App;
