import React from 'react';
import './Team.css';

const Team = (props) => {
    return (
        <div className="Team">
            <p onClick={props.click}>Team: {props.name}</p>
            <p>Rank: {props.rank}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Team;