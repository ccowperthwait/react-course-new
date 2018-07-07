import React from 'react';
import Team from './Team/Team';

const teams = (props) =>  props.teams.map((team,index) => {
        return (
          <Team
            clicked={() => props.clicked(index)}
            name={team.name}
            rank={team.rank}
            key={team.id}
            changed={(event) => props.changed(event, team.id)}
          />
      )
      });

export default teams;