import axios from 'axios';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function ViewCart(props) {
    const [cartProducts, setCartProducts] = useState(props.username);

    let handleToken = (token) => {
        console.log(token)
    }

    useEffect (() => {
     getCart(props.username)
    },) 
    const getCart = async (user) => {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/api/store/cart/`);
            setCartProducts(response.data)
        }    
        
        catch(error){
            setCartProducts();
        }
    }

    return (
        <div>
            <div>
                {props.user.cart.map((product)=> (
                    <span>{product.product_name}</span>
                ))}
            </div>
            {cartProducts &&
            <div className="mx-auto">
                <p className="list-group-item">{cartProducts.product_name}</p>
                <p className="list-group-item">{cartProducts.price}</p>
                <p><StripeCheckout stripeKey="pk_test_51JiRtyCwgXG48Eq1UB7ZXpPx4BXL5QtPhXQ43Lzl5bDuTvXpca4jevTkklfNu8HkX7KVKfJwhondnCbfE3GBnknQ00aAbu7lGK"
                token={handleToken}
                billingAddress
                className="list-group-item"
                // totalPrice={cartProducts.price * 100} 
                /></p>

            </div>
            
            }
        </div>
    )
}

export default ViewCart