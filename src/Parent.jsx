import React from 'react';
import Child from './Child';
function Parent(props) {
    return (
        <div>
            <Child name = "geetansh" age = {20}/>

        </div>
    );
}

export default Parent;