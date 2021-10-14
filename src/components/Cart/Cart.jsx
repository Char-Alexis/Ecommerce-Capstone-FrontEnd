import axios from 'axios';
import React, { useEffect, useState } from 'react';
 
const Cart = () => {
    const [products, setProducts]=useState()

    useEffect(() =>{
        loadProducts();
    })

    const loadProducts= async () =>{
        const result = await axios.get("")
        setProducts(result.data);
        
    }
    return (
        <div>
            {products.map((products)=>(
                <><><tr>  key={products.id}</tr>
                    <td>{products.name}</td></><td>{products.price}</td></>

            ))}
        </div>
    )
}

export default Cart

