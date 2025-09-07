import React from 'react'
import { useState } from 'react'

const ShoppingList = () => {
 const [ items , setItems ] = useState([]);
 const [ name , setName ] = useState("");
 const [ quantity , setQuantity ] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim() && quantity.trim()){
        setItems([...items , { name , quantity }]);
        setName("");
        setQuantity("");
    }
   }
 

  return (
    <>
    <h1> Shopping List </h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Item Name" value={name} onChange ={e => setName(e.target.value) } />

        <input 
        type="text"
        placeholder="Quantity"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
         />

         <button type="submit"> Add Item</button>

    </form>
    <ul>
        { items.map((item , index )=> (
            <li key={index}>
                {item.name} = Quantity: {item.quantity}
            </li>
        ))}
    </ul>
    </>
    
  )
}

export default ShoppingList