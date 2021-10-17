// import { useEffect } from "react";
// import StripeCheckout from "react-stripe-checkout";
// import React from 'react';

// const Checkout = (props) => {

//     // useEffect(()=>{

//     // })

//     const StripeCheckoutButton = ({price}) => {
//         const priceForStripe = price * 100;
//         const publishableKey = 'pk_test_51JiRtyCwgXG48Eq1UB7ZXpPx4BXL5QtPhXQ43Lzl5bDuTvXpca4jevTkklfNu8HkX7KVKfJwhondnCbfE3GBnknQ00aAbu7lGK'

//         const onToken = token => {
//             alert('Payment Successful!');
//         }
//     }
//     return(
//         <div>
//             <StripeCheckout
//                 label='Pay Now'
//                 name=''
//                 billingAddress
//                 shippingAddress
//                 description={`Your total is $${price}`}
//                 amount={priceForStripe}
//                 panelLabel='Pay Now'
//                 token={onToken}
//                 stripeKey={publishableKey}
//             />
//         <div>
//             <p>
//                 Total amount: $ {priceForStripe}
//             </p>
//         </div>
//         </div>


        // <div>
        //     {!redirect ?
        //     <div>
        //         <html>
        //         <head>
        //             <title>Checkout</title>
        //         </head>
        //         <body>
        //             <form action="/create-checkout-session" method="POST">
        //             <button type="submit">Pay</button>
        //             </form>
        //         </body>
        //         </html>
        //     </div>
        //     :<Redirect to='/success'/>}
        // </div>
//     )
// }

// export default Checkout