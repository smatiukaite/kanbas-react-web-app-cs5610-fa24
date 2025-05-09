import React, { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button
                onClick={() => setCount(count + 1)}
                className="wd-counter-up-click btn btn-success me-1 rounded-6">Up</button>
            <button
                onClick={() => setCount(count - 1)}
                className="wd-counter-down-click btn btn-danger">Down</button>
            <hr />
        </div>
    );
}