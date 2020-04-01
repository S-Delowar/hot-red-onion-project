import React from 'react';
import './Count.css';
import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(1);
    return (
        <div className="count ">
            <button onClick={()=> setCount(count === 1? 1: count - 1)} className="btn mr-2 ">-</button>
            {count}
            <button onClick={()=> setCount(count + 1)} className="btn ml-2">+</button>

        </div>
    );
};

export default Count;