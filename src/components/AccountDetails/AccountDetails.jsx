import axios from "axios"
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import userEvent from "@testing-library/user-event";


const AccountDetails = (props) => {
    // const accountDetails = props.location.accountDetails;
    const jwt = localStorage.getItem('token');
    const [currentUser, setCurrentUser] = useState({
        user_id: props.userId
    })

    // const user = getUser();
    
    useEffect(() => {
        getUserInformation(jwt);
    },[currentUser]);
    
    // function getUser(){
    //     try{
    //         const user = jwtDecode(jwt);
    //         return user;
    //     }catch{

    //     }
    // }
    
    async function getUserInformation(token) {
        const response = await axios.get(`http://127.0.0.1:8000/api/auth/login/${props.userId}`, { headers: {Authorization: 'Bearer ' + token}});
        setCurrentUser(response.data)
    }

    return (
        <div>
            <h1> Your Account </h1>
            <h2> {props.userId}</h2>
        </div>
    )
}

export default AccountDetails