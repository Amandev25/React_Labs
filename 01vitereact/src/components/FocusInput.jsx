import React from 'react'
import { useRef } from 'react'
const FocusInput = () => {
    const inputRef = useRef(null);
    
    const focus = () => {
        inputRef.current.focus();
        inputRef.current.value = "Aman Yadav";
    }

  return (
    <div>FocusInput
         <input type="text" ref={inputRef} placeholder='I will be Foucused !!' />
    <button onClick={focus}>Click Me for attention</button>
    </div>
   
  )
}

export default FocusInput