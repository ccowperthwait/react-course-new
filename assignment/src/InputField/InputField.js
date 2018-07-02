import React from 'react';

const InputField = (props) => {
    return (
        <div>
            <input
                type="text"
                value={props.initialvalue}
                onChange={props.change}
            />
        </div>
    )
}

export default InputField;