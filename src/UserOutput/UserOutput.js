import React from 'react';

const userOutput = (props) => {
    return (
        <div>
             <p>Some random text</p>
             <p onClick={props.change}>Hello {props.username}</p>
        </div>
   )

}

export default userOutput;