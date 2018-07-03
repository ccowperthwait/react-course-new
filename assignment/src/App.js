import React, { Component } from 'react';
import './App.css';
import InputField from './InputField/InputField';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  initialValue = 'Initial text.';
  state = {
    textInput: this.initialValue,
    textLength: this.initialValue.length
  };

inputChangeHandler = (event) => {
  this.setState(
    {
      textInput: event.target.value,
      textLength: event.target.value.length
    }
  )
}

removeCharacterHandler = (index) => {
  //var temp = this.state.textInput.slice(0,index) + this.state.textInput.slice(index + 1);

  const text = this.state.textInput.split('');
  text.splice(index,1);
  const temp = text.join('');

  this.setState(
    {
      textInput: temp,
      textLength: temp.length
    }
  )
}

render() {

    const charList = this.state.textInput.split('').map((character,index) => {
      return (
        <CharComponent
        key={index}
        index={index}
        character={character}
        click={() => this.removeCharacterHandler(index)}
      />
      )
    });

    return (
      <div className="App">
      <hr/>
      <InputField change={this.inputChangeHandler} initialvalue={this.state.textInput} />
      <br/><br/>
      {charList}
      <br/><br/>
      <ValidationComponent
        text={this.state.textInput}
        textLength={this.state.textLength}
      />

      </div>
    );
  }
}

export default App;
