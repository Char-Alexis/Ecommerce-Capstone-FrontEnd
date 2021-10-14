import { useState } from "react";
import "./Registration.css";
// import Register from '../Register/Register';


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
    // this.props.navToRegister();

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Registration;
// class Registration extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       first_name: "",
//       last_name: "",
//       email: "",
//       username: "",
//       password: "",
//       user: props.user,
//       register: props.register,
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const user = {
//       first_name: this.state.first_name,
//       last_name: this.state.last_name,
//       email: this.state.email,
//       username: this.state.username,
//       password: this.state.password,
//     };
//     this.props.userRegister(user);
//     this.setState({
//       first_name: "",
//       last_name: "",
//       email: "",
//       username: "",
//       password: "",
//     });
//   };

//   try {
//     let response = await axios.post(
//       "http://127.0.0.1:8000/api/auth/register/",
//       registrationInfo
//     );
//     console.log(response);
//   } catch {
//     console.log("Unsuccessful Registration");
//   }
// };

// render() {

// const Registration = (props) => {
//   const { values, handleChange, handleSubmit } = useForm(register);
//   const [redirect, setRedirect] = useState(false);

//   async function register() {
//     const user = { ...value };
//     await props.registerUser(user);
//     setRedirect(true);
//   }

//   return (
//     <div className="page-content">
//       <div className="form-v5-content">
//         <form
//           className="form-detail"
//           action="#"
//           method="post"
//           onSubmit={(event) => this.handleSubmit(event)}
//         >
//           <h2>Register Account Form</h2>
//           <div className="form-row">
//             <label for="first_name">First Name</label>
//             <input
//               type="text"
//               name="first_name"
//               id="first_name"
//               className="input-text"
//               placeholder="Your Name"
//               onChange={this.handleChange}
//               value={this.state.first_name}
//             />
//             <i className="fas fa-user"></i>
//           </div>
//           <div className="form-row">
//             <label for="your-email">Last Name</label>
//             <input
//               type="text"
//               name="last_name"
//               id="last_name"
//               className="input-text"
//               placeholder="Last Name"
//               onChange={this.handleChange}
//               value={this.state.last_name}
//             />
//             <i className="fas fa-envelope"></i>
//           </div>
//           <div className="form-row">
//             <label for="your-email">Username</label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               className="input-text"
//               placeholder="Username"
//               onChange={this.handleChange}
//               value={this.state.username}
//             />
//             <i className="fas fa-envelope"></i>
//           </div>
//           <div className="form-row">
//             <label for="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               className="input-text"
//               placeholder="Your Password"
//               onChange={this.handleChange}
//               value={this.state.password}
//             />
//             <i className="fas fa-lock"></i>
//           </div>
//           <div className="form-row">
//             <label for="your-email">Your Email</label>
//             <input
//               type="text"
//               name="email"
//               id="email"
//               className="input-text"
//               placeholder="Your Email"
//               onChange={this.handleChange}
//               value={this.state.email}
//             />
//             <i className="fas fa-envelope"></i>
//           </div>

//           <div className="form-row-last">
//             <input
//               type="submit"
//               name="register"
//               className="register"
//               value="Register"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Registration;
