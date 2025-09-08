import React, { useContext } from 'react'
import { ComponentsContext } from '../UserContext.jsx'
const ComponentC = () => {
    const username = useContext(ComponentsContext);
    if(!username)
    {
        return null
    }
  return (
   <h1>
    My name is : {username}
    </h1>
  )
}

export default ComponentC