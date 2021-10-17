import axios from 'axios';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function ViewCart(props) {
    const [cartProducts, setCartProducts] = useState(props.username);

    let handleToken = (token) => {
        console.log(token)
        alert("Payment Successful!")
    }

    useEffect (() => {
     getCart(props.username)
    },[]) 
    const getCart = async (user) => {
        try{
            let response = await axios.get("http://127.0.0.1:8000/api/store/cart/");
            setCartProducts(response.data)
        }    
        
        catch(error){
            setCartProducts();
        }
    }

    return (
        <div>
            {cartProducts &&
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{cartProducts.product_name}</li>
                <li className="list-group-item">{cartProducts.price}</li>
                <li><StripeCheckout stripeKey="pk_test_51JiRtyCwgXG48Eq1UB7ZXpPx4BXL5QtPhXQ43Lzl5bDuTvXpca4jevTkklfNu8HkX7KVKfJwhondnCbfE3GBnknQ00aAbu7lGK"
                token={handleToken}
                billingAddress
                className="list-group-item"
                // totalPrice={cartProducts.price * 100} 
                /></li>

            </ul>
            }
        </div>
    )
}

export default ViewCart