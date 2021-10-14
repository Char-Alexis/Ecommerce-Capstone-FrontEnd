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
    // useHistory("/")
    this.props.history.push("/");
  };

  // navToRegister = (event) => {
  //       if (this.state.register == false)
  //       {this.state.register = true}
  //       else{this.state.register = false}
  //       this.setState(
  //          {register: this.state.register} 
  //       );
  //   }

  render() {
    return (
      <div>
        {/* {this.state.register ? 
                <Registration register = {this.state.register} navToRegister={this.navToRegister}/>
                :  */}
        <div className="main">
          <div className="col-md-6 col-sm-12">
            <div className="login-form">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    className="form-control"
                    placeholder="User Name"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-black">
                  Login
                </button>
                <button type="submit" className="btn btn-secondary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
          {/* }  */}
      </div>
    );
  }
}

export default Login;
