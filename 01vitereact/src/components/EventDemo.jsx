import React from 'react'

const EventDemo = () => {
  const buttonHandler = () => {
    alert("Button clicked!");
  };
  const copyHandler = () => {
    alert ( "copied!!");
  }
  const mouseHandler = () => {
    alert ( "Mouse moved!!");
  }

  return (
    <div>
        <button onClick={buttonHandler}>Click</button>
        <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nisi!</p>

        <p onMouseMove={mouseHandler}>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default EventDemo