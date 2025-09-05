import React from 'react'

const Greeting = ({ timeofday }) => {

  return (
    <div>
        { timeofday === 'morning' ? <h1> GoodMorning</h1> : <h1> Good AfterNoon </h1>}
    </div>
  )
}

export default Greeting