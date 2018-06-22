import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is the first paragraph. {props.username}</p>
            <p>This is the second paragraph. {props.changed}</p>
        </div>
    )
}

export default userOutput;