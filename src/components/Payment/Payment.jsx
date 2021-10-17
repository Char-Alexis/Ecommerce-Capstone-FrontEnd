import { Switch, Route, BrowserRouter } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Payment = () => {

    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.prevetDefault();

        const CardElement = elements.getElement(CardElement);
        console.log('stripe', stripe)
    }


    return (
        <form onSubmit={handleSubmit}>

            <CardElement></CardElement>
            <button>Pay</button>
        </form>
    )
}



export default Payment