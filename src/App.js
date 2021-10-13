import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import ReviewForm from "./components/ReviewForm/ReviewsForm";
import RoutineBuilder from "./components/RoutineBuilder/RoutineBuilder";
import ProductsListing from "./components/ProductListing/ProductsListing";
import ProductDetails from "./components/ProductDetails/ProductDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      review: [],
    };
  }

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch {}
  }
  // Register user
  userRegister = async (registeredUser) => {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/auth/register/",
      registeredUser
    );
    console.log(response.data);
    if (response === undefined) {
      this.setState({});
    } else {
      this.setState({
        registeredUser: response.data,
      });
    }
  };

  // Login
  getCredentials = async (credentials) => {
    try {
      let response = await axios.post(
        "https://localhost:44394/api/authentication/login/",
        credentials
      );
    } catch {
      console.log("Unsuccessful Login");
    }
  };

  // Get all products
  async getAllProducts() {
    let response = await axios.get("http://127.0.0.1:8000/api/store/product/");
    this.setState({
      products: response.data,
    });
  }

  render() {
    const jwt = localStorage.getItem("token");
    function getUser() {
      try {
        const user = jwtDecode(jwt);
        return user;
      } catch {}
    }

    const user = getUser();

    return (
      <div>
        <BrowserRouter>
          <div>
            {/* <Switch> */}
            <NavBar />
            <Home />
            <Route exact path="/register" component={Registration} />
            <Route
              path="/products"
              render={(props) => (
                <ProductsListing {...props} productList={this.state.products} />
              )}
              // component={ProductListing}
            />
            <Route
              exact
              path="/detalis/:id"
              render={(props) => (
                <ProductDetails {...props} details={this.state.products} />
              )}
              // details={this.state.products}
            />
            <Login path="/login" getCredentials={this.getCredentials} />
            {/* <Route exact path="/login" component={Login} /> */}

            <ReviewForm path="reviews" productId={this.state.review} />
            <RoutineBuilder path="routine" />
            {/* </Switch> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// const [token, setToken] = useState([]);
// const [user, setUser] = useState([]);
// const [registerUser, setRegisterUser] = useState([]);
// const [logIn, setLoginIn] = useState([]);

// useEffect(() => {
//   retrieveToken();
// });

// let retrieveToken = () => {
//   const jwt = localStorage.getItem("token");
//   if (jwt !== null) {
//     try {
//       let user = jwtDecode(jwt);

// let registeredUser = async (user) => {
//   try {
//     let response = await axios.post(
//       "http://127.0.0.1:8000/api/auth/register/",
//       user
//     );
//
// componentDidMount() {
//   const jwt = localStorage.getItem("token");
//   this.getAllProducts();
//   try {
//     const user = jwtDecode(jwt);
//     this.setState({
//       user: user,
//     });
//     console.log(this.state.products);
//   } catch (error) {
//     console.log(error);
//   }
// }
