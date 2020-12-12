import React, { useState, useEffect } from 'react';
import './JacketComponent.css';

function JacketComponent() {
    useEffect(() => {
        console.log('componentDidMount!')
    })
    useEffect(() => {
        console.log('countHasChanged!',count)
    })
    const [count, setCount] = useState(20);
   
    return(
        <div className="container">
            <h2> Jackets: {count} </h2>
            <button onClick = {() =>setCount(count + 1)}>Add count</button>
            <button onClick = {() =>setCount(count - 1)}>Substruct count</button>
            <button onClick = {() =>setCount(0)}>Reset</button>
        </div>
    );
}

export default JacketComponent;