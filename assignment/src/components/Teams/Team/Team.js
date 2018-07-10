import React, {Component} from 'react';
import classes from './Team.css';

class Team extends Component {

    constructor (props) {
        super(props);
        console.log('[Team.js] Inside constructor.', props);
      }
    
      componentWillMount(){
        console.log('[Team.js] Inside componentWillMount.');
      }
    
      componentDidMount(){
        console.log('[Team.js] Inside componentDidMount.');
      }
    
    render(){
        console.log('[Team.js] Inside render.');
        return (          
            <div className={classes.Team}>
            <p onClick={this.props.clicked}>Team: {this.props.name}</p>
            <p>Rank: {this.props.rank}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
        )
    }
}

export default Team;