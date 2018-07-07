import React from 'react';
import classes from './Team.css';
// import Radium from 'radium';

const Team = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return (
        <div className={classes.Team}
        //  style={style}
         >
            <p onClick={props.clicked}>Team: {props.name}</p>
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