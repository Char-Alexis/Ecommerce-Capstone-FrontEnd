import { useState } from "react";
import "./Registration.css";


const Registration = ({ registerUser }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {first_name: firstName, last_name: lastName, email, username, password};
    registerUser(data);
    // this.history.push("/login")
    window.location = "/login";

  };
  return (

            <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form onSubmit={handleSubmit} className="register-form" id="register-form">
                            <div className="form-group">
                                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" value = { firstName } onChange={(event) => setFirstName(event.target.value)} placeholder="Your First Name"/>
                            </div>
                            <div className="form-group">
                                <label for="lastName"></label>
                                <input type="lastName" value = { lastName } onChange={(event) => setLastName(event.target.value)} placeholder="Your Last Name"/>
                            </div>
                             <div className="form-group">
                                <label for="username"></label>
                                <input type="username" value = { username } onChange={(event) => setUsername(event.target.value)} placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <label for="password"></label>
                                <input type="password" value = { password } onChange={(event) => setPassword(event.target.value)} placeholder="Password"/>
                            </div>
                             <div className="form-group">
                                <label for="email"></label>
                                <input type="email" value = { email } onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
                            </div>
                            
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <a href="/login" className="signup-image-link">I am already a member</a>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Registration;
