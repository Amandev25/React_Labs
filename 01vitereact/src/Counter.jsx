import React from 'react'

import { useState } from 'react'
const Counter = () => {
  let  [ count , SetCount ] = useState(0);
   const increment = () => {
    count = count + 1 ;
    if(count >=20){
      count = 20 ;
      
    }
    SetCount(count);
   }

   const Decrement = () => {
    count = count -1 ;
    count<0 ?count=0 : count ;
    SetCount(count);
   }

  return (
    <div>
        <h1>Counter = { count }</h1>

        <button onClick ={increment}>Increment by one</button>
    <button onClick ={Decrement}>Decrement by one</button>
     </div>

    

  )
}

export default Counter