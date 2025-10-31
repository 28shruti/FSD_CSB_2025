import { useState } from 'react';
import React from 'react';

function StateHandling() {
    const [counter,setCounter]=useState(20);

function incrementCounter(){
    setCounter(counter+2);
}
function decreaseCounter(){
    setCounter(counter-4);
}
    return (
        <div>
            <h2>Counter value = {counter}</h2>
            <button onClick={incrementCounter}>Increment Counter</button>
            {/* <button onClick={decreaseCounter}>Decrease Counter</button> */}   {/*external func */}
            <button onClick={()=>setCounter(counter-4)}>Decrease Counter</button>   {/*inline function*/}

        </div>
    );
}
export default StateHandling