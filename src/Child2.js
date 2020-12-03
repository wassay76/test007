import React, { useReducer } from 'react';
import numberReducer from './numberReducer';


function Child2() {
let [state, abc] = useReducer(numberReducer,52);
return(
    <div>
    child 2 {state}
    <button onClick={()=> {abc({type:'INCREAMENT'});}}>INCREAMENT</button>
    <button onClick={()=> {abc({type:'DECREAMENT'});}}>DECREAMENT</button>
    </div>
  );
}

export default Child2;
