import React, { useState } from 'react';
import './App.css';
import Parent from "./Parent";
import ValueContext from './ValueContext';
function App() {

  //let [number, setnumber] = useState(45);
  let value= useState(45);
  return (
  
  <ValueContext.Provider value={value}>
    <div>
   hello world 

   <Parent></Parent>
   <br/><br/>
   
    </div>
    </ValueContext.Provider>
  );
}

export default App;
