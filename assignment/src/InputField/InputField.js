import React from 'react';

const InputField = (props) => {
    return (
        <div>
            <input
                type="text"
                value={props.initialvalue}
            />
        </div>
    )
}

export default InputField;