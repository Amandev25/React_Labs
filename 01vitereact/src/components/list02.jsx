import React from 'react'

const List02 = () => {
const userInfo = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Alice Johnson", age: 45 },
    { id: 4, name: "Bob Brown", age: 23 }
] 

  return (
    <main>
        {userInfo.map(({ id , name , age}) => (
            <ul key = {id}>
                <li>{name} - {age} years old</li>
            </ul>
        ))

        }
    </main>
  )
}

export default List02