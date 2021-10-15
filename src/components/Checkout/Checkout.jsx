const Checkout = (props) => {
    return(
        <div>
            {!redirect ?
            <div>

            </div>
            :<Redirect to='/success'/>}
        </div>
    )
}