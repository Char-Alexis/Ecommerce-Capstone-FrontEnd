import axios from "axios"
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";


const AccountDetails = (props) => {
    const accountDetails = props.location.state.accountDetails;
    const jwt = localStorage.getItem('token');
    const [currentUser, setCurrentUser] = useState()

    async function getUserInformation(token) {
        const response = await axios.get(`http://127.0.0.1:8000/api/auth/login/`, { headers: {Authorization: 'Bearer ' + token}});
        setCurrentUser(response.data)
    }

    useEffect(() => {
        getUserInformation(jwt);
    },[]);

    return (
        <div>
            <div> current={currentUser} details={accountDetails}</div>
        </div>
    )
}

export default AccountDetails