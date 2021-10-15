import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductsListing from '../ProductListing/ProductsListing';
 
const Cart = (props) => {
    const [products, setProducts]=useState([]);
    const [checkout, setCheckout] = useState()

    useEffect(() =>{
        loadProducts(props.user);
    },[loadProducts])

    const loadProducts= async (user) =>{
        await axios.get(`http://127.0.0.1:8000/api/store/cart/${user.id}`).then(response=>(setProducts(response.data)))
        
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
};

export default Cart

