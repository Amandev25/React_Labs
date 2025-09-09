import React, { useState, useRef, useEffect } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null);

    useEffect (() => {
        intervalRef.current = setInterval(() => {
            console.log("Interval Running")
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    const handlecount = () => {
        clearInterval(intervalRef.current);
    }



  return (
    <div>
        <h2>Timer : {timer}</h2>
        <button onClick={handlecount}>Stop Timer</button>
       
    </div>
  )
}

export default Timer