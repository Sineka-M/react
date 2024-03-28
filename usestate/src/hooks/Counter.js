import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Fixing the typo usestate -> useState, initializing count to 0

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>click me!</button> {/* Fixing the typo onclick -> onClick */}
            <p>Current value of count is: {count}</p> {/* Using curly braces to display the value of count */}
        </div>
    );
}

export default Counter;
