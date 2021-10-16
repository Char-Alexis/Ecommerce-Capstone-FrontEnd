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
      // <div>
      //   <div className="main">
      //     <div className="col-md-6 col-sm-12">
      //       <div className="login-form">
      //         <form onSubmit={this.handleSubmit}>
      //           <div className="form-group">
      //             <label>Username</label>
      //             <input
      //               type="text"
      //               name="username"
      //               onChange={this.handleChange}
      //               value={this.state.username}
      //               className="form-control"
      //               placeholder="User Name"
      //             />
      //           </div>
      //           <div className="form-group">
      //             <label>Password</label>
      //             <input
      //               type="password"
      //               name="password"
      //               onChange={this.handleChange}
      //               value={this.state.password}
      //               className="form-control"
      //               placeholder="Password"
      //             />
      //           </div>
      //           <button type="submit" className="btn btn-black">
      //             Login
      //           </button>
      //           <button type="submit" className="btn btn-secondary">
      //             Register
      //           </button>
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
//  </div>


 <section class="sign-in">
            <div class="container">
                <div class="signin-content">

                    <div class="signin-form">
                        <h2 class="form-title">Sign in</h2>
                        <form onSubmit={this.handleSubmit} class="login-form" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="username"  onChange={this.handleChange} value={this.state.username} placeholder="Your Username"/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password"/>
                            </div>
                            <div class="form-group">
                               
                            </div>
                            <div class="form-group form-button">
                                <input type="submit"  class="form-submit" value="Log in"/>
                            </div>
                        </form>
                        <div class="social-login">
                            <span class="social-label">Don't have an account?</span>
                            <ul class="socials">
                                <li><a href="/register">Register Here</a></li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

   

    );
  }
}

export default Login;
