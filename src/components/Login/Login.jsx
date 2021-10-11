import React, { Component } from "react";
import "./Login.css";
import Registration from "../Registration/Registration";

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
  };

  navToRegister = (event) => {
    if (this.state.register == false) {
      this.state.register = true;
    } else {
      this.state.register = false;
    }
    this.setState({ register: this.state.register });
  };

  render() {
    return (
      <div>
        {this.state.register ? (
          <Registration
            register={this.state.register}
            navToRegister={this.navToRegister}
          />
        ) : (
          <div class="main">
            <div class="col-md-6 col-sm-12">
              <div class="login-form">
                <form>
                  <div class="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="User Name"
                    />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" class="btn btn-black">
                    Login
                  </button>
                  <button type="submit" class="btn btn-secondary">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
