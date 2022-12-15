import React, {useState} from 'react';

const Counters = () => {
    const[counter, setCount] = useState(0);
    function addState(){
        setCount(counter+1);
    }

    function removeState(){
        setCount(counter-1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <button onClick={addState}>Add</button>
                <button onClick={removeState}>Remove</button>
            </div>
        </div>
    );
};

export default Counters;