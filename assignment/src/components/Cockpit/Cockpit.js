import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let buttonClass = '';
    if(props.isListVisible){
        buttonClass = classes.Red;
    }

    let assignedClasses = [];
    if(props.Teams.length<3){
      assignedClasses.push(classes.red);
    }
    if(props.Teams.length<2){
      assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>{props.appTitle}</p>
            <hr/>
            <button className={buttonClass} onClick={props.clicked} >Toggle</button>
        </div>
    );
};

export default cockpit;