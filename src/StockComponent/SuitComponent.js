import React, { useState, useEffect } from 'react';
import './SuitComponent.css';

function SuitComponent() {
    useEffect(() => {
        console.log('componentDidMount!')
    })
    useEffect(() => {
        console.log('countHasChanged!',count)
    })
    const [count, setCount] = useState(40);
   
    return(
        <div className="container">
            <h2> Suits: {count} </h2>
            <button onClick = {() =>setCount(count + 1)}>Add count</button>
            <button onClick = {() =>setCount(count - 1)}>Substruct count</button>
            <button onClick = {() =>setCount(0)}>Reset</button>
        </div>
    );
}

export default SuitComponent;