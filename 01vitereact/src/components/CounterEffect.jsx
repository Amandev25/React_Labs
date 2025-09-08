import React from 'react'
import { useState , useEffect } from 'react';

const CounterEffect = () => {
   const [ count , setCount ] = useState(0);

   useEffect( () => {

    document.title = `Count is ${count}` ;

   } , [count]);

   

  return (
    <>
    <h1>Counter</h1>
    
    <button onClick = {() => setCount(count+1)}>Click me</button>
    <h3>Count is {count} || {document.title}</h3>
    </>
  )
}

export default CounterEffect