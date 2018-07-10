import React, {PureComponent} from 'react';
import Team from './Team/Team';

class Teams extends PureComponent {

  constructor (props) {
    super(props);
    console.log('[Teams.js] Inside constructor.', props);
  }

  componentWillMount(){
    console.log('[Teams.js] Inside componentWillMount.');
  }

  componentDidMount(){
    console.log('[Teams.js] Inside componentDidMount.');
  }

  componentWillReceiveProps(nextProps){
    console.log('[Teams.js] UPDATE Inside componentWillReceiveProps.',nextProps);
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[Teams.js] UPDATE Inside shouldComponentUpdate.',nextProps,nextState);
  //   return (
  //     nextProps.Teams !== this.props.Teams ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   )
  // }

  componentWillUpdate(nextProps,nextState){
    console.log('[Teams.js] UPDATE Inside componentWillUpdate.',nextProps,nextState);
  }

  render() {
    console.log('[Teams.js] Inside render.');
    return (
    this.props.Teams.map((tempTeam,index) => {
      return (
        <Team
          clicked={() => this.props.clicked(index)}
          name={tempTeam.name}
          rank={tempTeam.rank}
          key={tempTeam.id}
          changed={(event) => this.props.changed(event, tempTeam.id)}
        />
    )
    })
  );
  }

  componentDidUpdate(){
    console.log('[Teams.js] UPDATE Inside componentDidUpdate.');
  }
}

export default Teams;