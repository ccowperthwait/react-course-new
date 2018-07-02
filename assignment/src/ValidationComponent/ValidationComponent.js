import React from 'react';

const ValidationComponent = (props) => {

    let message = "Text length okay!";
    if(props.textLength < 3)
        message = "Text length too short! (min 3)";
    else if(props.textLength >30)
        message = "Text length too long! (max 30)";

    return (
        <div>
            <p>{props.text}</p>
            <p>=&gt;{props.textLength}&lt;=</p>
            {message}
        </div>
    )
}

export default ValidationComponent;