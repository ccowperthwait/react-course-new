import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    const inputStyle= {
        border: '2px solid red'
    }

    return (
        <div className="UserInput">
            <br/>
            {props.label} <input type="text" style={inputStyle} onChange={props.changed} value={props.initialValue} />
            <br/>
        </div>
    )
};

export default userInput;