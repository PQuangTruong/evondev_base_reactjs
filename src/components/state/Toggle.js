import React, { useState } from "react";
import "./ToggleStyle.css";

//1. enabling state: useState(initialize value)
//2. initialize state: useState(false)
//3. reading state:
//4. update state

function Toggle() {
  const [on, setOn] = useState(false);
    console.log(on);
  const handleToggle = () => {
    setOn((on)=> {
        return !on;
    })
  }

  return (
    <div>
      <div className={`toggle ${on ? 'active' : " "}`} onClick={handleToggle}>
        <div className={`spinner ${on ? 'active' : " "}`}></div>
      </div>
      {/* <div className="toggle_control">
        <div className="toggle_on" onClick={() => setOn(true)}>On</div>
        <div className="toggle_off" onClick={() => setOn(false)}>Off</div>
      </div> */}
    </div>
  );
}

export default Toggle;
