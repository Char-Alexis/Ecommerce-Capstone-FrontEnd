import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductsListing from '../ProductListing/ProductsListing';
 
const Cart = () => {
    const [products, setProducts]=useState()

    useEffect(() =>{
        loadProducts();
    })

    const loadProducts= async () =>{
        const result = await axios.get("http://127.0.0.1:8000/api/store/cart/")
        setProducts(result.data);
        
    }
    return (
        <div>
            <html>
                <head>
                    <title>Checkout</title>
                </head>
                <body>
                    <form action="/create-checkout-session" method="POST">
                    <button type="submit">Pay</button>
                    </form>
                </body>
                </html>
        </div>
    )
}

export default Cart

