import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
      username: "Chris"
  }

  inputHandler = (newText) => {
    this.setState({
        username: newText
    });
  }

  inputChangeHandler = (event) => {
    this.setState({
        username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        {/* <UserInput
          label="Label:"
          change={() => this.inputHandler('something')}
        /> */}
        <UserInput
          label="Label:"
          initialValue={this.state.username}
          // change={this.inputHandler.bind(this, 'test')}
          changed={this.inputChangeHandler}
        />
        <UserOutput
          username={this.state.username}
          // changed={this.inputChangeHandler}
        />
        <UserOutput
          username="Christopher"
          //changed={this.inputChangeHandler}
        />
      </div>
    );
  }
}

export default App;
