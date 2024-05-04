import React from 'react';
import Parent from './Parent';
function Child(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    );
}

export default Child;