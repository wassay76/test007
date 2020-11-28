import React, { useState } from 'react';

function Room() {
    //const state = useState(true);
   // console.log("state = ",state)
   let [islit , setlit] = useState(true);
   let [age, setage]= useState(24);
   function updatelit(){
    console.log("button clicked")
    setlit(!islit); 
  
  }
   const increament_age = ()=>{
    console.log("button clicked")
    setage(++age); 
  
  }  


  return (
    <div>
      the room is {islit? "lit": "dark"}
    <br/>
    <button onClick={updatelit}>toogle light</button>
    <br/>
    AGE = {age}
    <br/>
    <button onClick={increament_age}>increase age </button>

    
    </div>

  );
}

export default Room;
