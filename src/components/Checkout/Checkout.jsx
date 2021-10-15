import { useEffect } from "react"

const Checkout = (props) => {

    useEffect(()=>{

    })

    const handleSubmit = async(e) => {
        const 
    }
    return(
        <div>
            {!redirect ?
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
            :<Redirect to='/success'/>}
        </div>
    )
}

export default Checkout