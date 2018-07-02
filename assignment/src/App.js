import React, { Component } from 'react';
import './App.css';
import InputField from './InputField/InputField';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  initialValue = "Initial text.";
  state = {
    text: this.initialValue,
    textLength: this.initialValue.length
  };

inputChangeHandler = (event) => {
  this.setState(
    {
      text: event.target.value,
      textLength: event.target.value.length
    }
  )
}

removeCharacterHandler = (index) => {
  var list = this.state.text.slice(0,index) + this.state.text.slice(index + 1);
  this.setState(
    {
      text: list,
      textLength: list.length
    }
  )
}

render() {

    var characters = this.state.text;
    var list = [];
    for(var i=0;i<characters.length;i++){
      list.push(characters[i]);
    }

    return (
      <div className="App">
      <hr/>
      <InputField change={this.inputChangeHandler} initialvalue={this.state.text} />
      <br/><br/>
      {list.map((character, index) => {
        return (
          <CharComponent
            key={index}
            index={index}
            character={character}
            click={() => this.removeCharacterHandler(index)}
          />
        )
      })}
      <br/><br/>
      <ValidationComponent
        text={this.state.text}
        textLength={this.state.textLength}
      />

      </div>
    );
  }
}

export default App;
