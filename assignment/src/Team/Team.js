import React from 'react';
import './Team.css';
// import Radium from 'radium';

const Team = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return (
        <div className="Team"
        //  style={style}
         >
            <p onClick={props.click}>Team: {props.name}</p>
            <p>Rank: {props.rank}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default 
// Radium(
    Team
// )
;