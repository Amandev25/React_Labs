import React from 'react'

const List = () => {
  const numbers = [1,2,3,4,5,6];

  return (
    <main>
        {
            numbers.map( number => (
                <ul key = {number}>
                    <li>{number}</li>
                </ul>
            ))
        }
    </main>
  )
}

export default List