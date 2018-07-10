import React, { PureComponent } from 'react';
import classes from './App.css';
import Teams from '../components/Teams/Teams';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor (props) {
    super(props);
    console.log('[App.js] Inside constructor.', props);
    this.state = {
      Teams: [
        {id: 'asdf', name: "Sweden",rank: 5},
        {id: 'sdfg', name: "Germany",rank: 2},
        {id: 'dghh', name: "United States",rank: 10}
      ],
      isListVisible: false
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount.');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount.');
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[App.js] UPDATE Inside shouldComponentUpdate.',nextProps,this.props,nextState);
  //   return (
  //     nextState.Teams !== this.state.Teams ||
  //     nextState.isListVisible !== this.state.isListVisible
  //   )
  // }

  componentWillUpdate(nextProps,nextState){
    console.log('[App.js] UPDATE Inside componentWillUpdate.',nextProps,nextState);
  }

  deleteTeamHandler = (index) => {
    const tempTeams = [...this.state.Teams];
    tempTeams.splice(index, 1);
    this.setState({
      Teams: tempTeams
    });
  }

  nameChangeHandler = (event, id) => {
    const teamIndex = this.state.Teams.findIndex(t => {
      return t.id === id;
    })
    const tempTeam = {
      ...this.state.Teams[teamIndex]
    };

    tempTeam.name = event.target.value;

    const tempTeams = [...this.state.Teams]
    tempTeams[teamIndex] = tempTeam;

    this.setState({
      Teams: tempTeams
    })
  }

  doShowHideList = () => {
    const tempTeams = this.state.isListVisible;
    this.setState({
      isListVisible: !tempTeams
    });
  }

  render() {
    console.log('[App.js] Inside render.');

    let tempTeams = null;

    if(this.state.isListVisible){
      tempTeams = (
          <Teams
            Teams={this.state.Teams}
            clicked={this.deleteTeamHandler}
            changed={this.nameChangeHandler}
          />
      );
    };

    return (
        <div className={classes.App}>
        <button onClick={() => {this.setState({isListVisible: true})}}>Show Persons</button>
          <Cockpit
            appTitle={this.props.title}
            isListVisible={this.state.isListVisible}
            Teams={this.state.Teams}
            clicked={this.doShowHideList}
          />
          {tempTeams}
        </div>
    );
  }

    componentDidUpdate(){
    console.log('[App.js] UPDATE Inside componentDidUpdate.');
  }

}

export default App;
