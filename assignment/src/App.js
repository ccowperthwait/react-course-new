import React, { Component } from 'react';
import './App.css';
import Team from './Team/Team.js';

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
    //const teams = this.state.Teams.slice();
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
    //const team = Object.assign({}, this.state.Teams[teamIndex]);

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
    const style = {
        backgroundColor: '#5555',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    let teams = null;

    if(this.state.isListVisible){
      teams = (
          <div>
            {this.state.Teams.map((team,index) => {
              return (
                <Team
                  click={() => this.deleteTeamHandler(index)}
                  name={team.name}
                  rank={team.rank}
                  key={team.id}
                  changed={(event) => this.nameChangeHandler(event, team.id)}
                />
            )
            })}
          {/* <Team
            id: 1, name={this.state.Teams[0].id: 1, name}
            rank={this.state.Teams[0].rank}
          />
          <Team
            id: 1, name={this.state.Teams[1].id: 1, name}
            rank={this.state.Teams[1].rank}
          />
          <Team
            id: 1, name={this.state.Teams[2].id: 1, name}
            rank={this.state.Teams[2].rank}
          /> */}
        </div>
      )
    };

    return (
    <div className="App">
      <button style={style} onClick={this.doShowHideList} >Toggle</button>
      {teams}
      </div>
    );
  }
}

export default App;
