import React, { Component } from 'react';
import classes from './App.css';
import Teams from '../components/Teams/Teams';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    Teams: [
      {id: 'asdf', name: "Sweden",rank: 5},
      {id: 'sdfg', name: "Germany",rank: 2},
      {id: 'dghh', name: "United States",rank: 10}
    ],
    isListVisible: false
  }

  deleteTeamHandler = (index) => {
    const teams = [...this.state.Teams];
    teams.splice(index, 1);
    this.setState({
      Teams: teams
    });
  }

  nameChangeHandler = (event, id) => {
    const teamIndex = this.state.Teams.findIndex(t => {
      return t.id === id;
    })
    const team = {
      ...this.state.Teams[teamIndex]
    };

    team.name = event.target.value;

    const teams = [...this.state.Teams]
    teams[teamIndex] = team;

    this.setState({
      Teams: teams
    })
  }

  doShowHideList = () => {
    const temp = this.state.isListVisible;
    this.setState({
      isListVisible: !temp
    });
  }

  render() {

    let teams = null;

    if(this.state.isListVisible){
      teams = (
          <Teams
            teams={this.state.Teams}
            clicked={this.deleteTeamHandler}
            changed={this.nameChangeHandler}
          />
      );
    };

    return (
        <div className={classes.App}>
          <Cockpit
            appTitle={this.props.title}
            isListVisible={this.state.isListVisible}
            Teams={this.state.Teams}
            clicked={this.doShowHideList}
          />
          {teams}
        </div>
    );
  }
}

export default App;
