import React from 'react'
import {  useEffect } from 'react'


const BasicEffect = () => {
    

    useEffect(() => {
        console.log("Mounted for the first tiime");
    },[]);

  return (
    <>
    <h1>Mounted for first time !!</h1>

    </>
  )
}

export default BasicEffect ;