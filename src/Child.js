import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child(props) {
let value = useContext(ValueContext);
console.log("value",value);
return(
    <div>
   Child number : {value[0]}
   <button onClick={()=> {value[1](++value[0])}}>update value</button>
    </div>
  );
}

export default Child;
