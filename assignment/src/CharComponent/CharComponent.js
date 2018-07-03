    import React from 'react';

const charComponent = (props) => {
    const test={
        display: 'inline',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
    };
    return (
        <div onClick={props.click} style={test}> {props.character}
        </div>
    )
}

export default charComponent;