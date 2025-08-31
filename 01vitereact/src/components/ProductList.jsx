import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "phone", price: "Rs.234"},
        { id: 2, name: "laptop", price: "Rs.8547"},
        { id: 3, name: "Headphone", price: "Rs.0230"}
    ]
  return (
    <main>
        {products.map(({id, name, price}) => (
           <ul key={id}>
            <li>{name} || {price}</li>
            
           </ul>
        ))}
    </main>
  )
}

export default ProductList