import React, { Component } from "react";
import "./Login.css";
import Registration from "../Registration/Registration";
import { useHistory } from "react-router";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      jwt: null,
      register: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.getCredentials(credentials);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="signin">
      <div class="container">
          <div class="row">
            <div class="col">
                        <div className="signin-form">
                            <h2 className="form-title">Sign in</h2>
                            <form onSubmit={this.handleSubmit} className="login-form" id="login-form">
                                <div className="form-group">
                                    <input type="text" name="username"  onChange={this.handleChange} value={this.state.username} placeholder="Your Username"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit"  className="form-submit" value="Log in"/>
                                </div>
                            </form>
                            <div className="social-login">
                                <span className="social-label">Don't have an account?</span>
                                <ul className="socials">
                                    <li><a href="/register">Register Here</a></li>
                                </ul>
                            </div>
                          </div>
                        </div>
                       </div>
              <div class="col">
                <img src="/images/unsplash.jpg" className="image" />  
              </div>
            </div>
        </div>
    );
  }
}

export default Login;
