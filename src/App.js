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
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch {}
    this.getProducts();
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
        "http://127.0.0.1:8000/api/store/user/",
        credentials
      );
    } catch {
      console.log("Unsuccessful Login");
    }
  };

  // Get all products
  async getProducts() {
    console.log("hi");
    let response = await axios.get("http://127.0.0.1:8000/api/store/product/");
    console.log(response.data);
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
            <NavBar />
            <Home />
            <Switch>
              <Route exact path="/register" component={Registration} />
              <Route
                path="/products"
                render={(props) => (
                  <ProductsListing
                    {...props}
                    productList={this.state.products}
                  />
                )}
                // component={ProductListing}
              />
              <Route
                exact
                path="/details/:id"
                render={(props) => (
                  <ProductDetails {...props} details={this.state.products} />
                )}
                // details={this.state.products}
              />
              <Route
                path="/login"
                render={(props) => (
                  <Login {...props} getCredentials={this.getCredentials} />
                )}
              />
              <Route
                path="/reviews"
                render={(props) => (
                  <ReviewForm {...props} productId={this.state.review} />
                )}
              />
              <Route
                path="/routine"
                render={(props) => <RoutineBuilder {...props} />}
              />
            </Switch>
            {/* <Route exact path="/login" component={Login} /> */}
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
//   this.getProducts();
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
