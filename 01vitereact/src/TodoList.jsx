import React from 'react'
import { useState } from 'react' ;

const TodoList = () => {
  let [ todos , setTodos ] = useState([]);
  
   let [ inputValue , setInputValue ] = useState("");
    
   const handleSubmit = (e) => {
    e.preventDefault();
     if( inputValue.trim()){

        setTodos([ ...todos, inputValue ]);

        setInputValue("");
     }

   } 

   const changeHandler = (e) => {
    setInputValue(e.target.value);
   }

  return (
    <>
     <h1>Todo List </h1>

     <form onSubmit ={handleSubmit}>
        <input type="text" value ={inputValue} onChange={changeHandler} placeholder="Add a new todo" />
        <button type ="submit">Add Todo</button>
     </form>

     <ul>
        {
            todos.map((todo, index)=> (

                <li key={index}>{todo}</li>
            ))
        }
     </ul>

    </>
  )
}

export default TodoList