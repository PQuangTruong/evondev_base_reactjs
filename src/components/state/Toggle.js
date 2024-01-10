import React, { useState } from "react";

//1. enabling state: useState(initialize value)
//2. initialize state: useState(false)
//3. reading state: 
//4. update state

function Toggle() {
    const [on, setOn] = useState(false);
    console.log(on);

    return (
        <div className="toggle" onClick={() => setOn(true)}> 
            Toggle {on ? "On" : "Off"}
        </div>
    )
}

export default Toggle;
