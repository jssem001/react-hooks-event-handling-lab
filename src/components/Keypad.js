// Code Keypad Component Here
import React from 'react';

function Keypad (){
    function newEvent() {
        console.log("Entering password...");
      }
    
    return (
        <input type="password" onChange={newEvent}/>
    )
}

export default Keypad;