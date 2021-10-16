import axios from 'axios';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function ViewCart(props) {
    const [cartProducts, setCartProducts] = useState

    let handleToken = (token) => {

    }

    useEffect (() => {
     getCart(props.user.id)
    },[]) 

    const getCart = async (user) => {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/api/store/cart/${user}/`);
            setCartProducts(response.data)
        }    
        
        catch(error){
            setCartProducts();
        }
    }

    return (
        <div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{cartProducts.productName}</li>
                <li class="list-group-item">{cartProducts.price}</li>
                <li><StripeCheckout stripeKey="pk_test_51JiRtyCwgXG48Eq1UB7ZXpPx4BXL5QtPhXQ43Lzl5bDuTvXpca4jevTkklfNu8HkX7KVKfJwhondnCbfE3GBnknQ00aAbu7lGK"
                token={handleToken}
                class="list-group-item"
                totalPrice={cartProducts.price} /></li>

            </ul>
        </div>
    )
}

export default ViewCart