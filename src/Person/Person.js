import React from 'react';
import './Person.css'
const person = (props) => {

    const style = {
        '@media (minWidth: 500px)' : {
            width: '450px'

        }
    }
    return (
        <div className="Person" onClick={props.delete} style={style}>
          <p>I'm {props.name} and {props.age} years old </p>
          <p>{props.children}</p>
          <input type="text" onChange={props.changed}/>
        </div>
        
    )
}

export default person;