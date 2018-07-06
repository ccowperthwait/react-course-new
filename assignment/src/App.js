import React, { Component } from 'react';
import classes from './App.css';
import Team from './Team/Team.js';
// import Radium, { StyleRoot } from 'radium';

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
    // const style = {
    //     backgroundColor: 'green',
    //     color: 'white',
    //     border: '1px solid blue',
    //     padding: '8px',
    //     cursor: 'pointer',
    //     // ':hover':  {
    //     //   backgroundColor: 'lightgreen',
    //     //   color: 'black'
    //     // }
    // }

    let teams = null;
    let buttonClass = null;

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
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      buttonClass = classes.Red;
    };

    let assignedClasses = [];
    if(this.state.Teams.length<3){
      assignedClasses.push(classes.red);
    }
    if(this.state.Teams.length<2){
      assignedClasses.push(classes.bold);
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <p className={assignedClasses.join(' ')}>React App - Branch of previous "assigment" for section5!</p>
          <hr/>
          <button className={buttonClass} onClick={this.doShowHideList} >Toggle</button>
          {teams}
        </div>
      // </StyleRoot>
    );
  }
}

export default 
// Radium(
  App
// )
;
