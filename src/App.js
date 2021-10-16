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
import AddToCart from "./components/AddToCart/AddToCart";
import SuccessPage from "./components/SuccessPage/SucessPage";
import ViewCart from "./components/ViewCart/ViewCart";
// import AccountDetails from "./components/AccountDetails/AccountDetails";
// import Delivery from "./components/Delivery/Delivery"
import Results from "./components/Results/Results";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      review: [],
      userPreferences: {
       skinType: "",
       userGoals: "",
      },

      
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
    console.log(registeredUser)
    let response = await axios.post(
      "http://127.0.0.1:8000/api/auth/register/",
      registeredUser
    );
    console.log(response.data);
    if (response === undefined) {
      this.setState({});
    } else {
      this.setState({
        user: response.data,
      });
    }
  };

  handleUserPreferences = (e) => {
    this.setState({
      userPreferences: {
        ...this.state.userPreferences,
        [e.target.name]: e.target.value
      }
    })
  }

  // Login
  getCredentials = async (credentials) => {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        credentials
      );
      console.log(response)
     
      this.setState({
        user: {
          username: credentials.username,
          access:response.data.access

        }

      });
      localStorage.setItem("username", credentials.username)
      localStorage.setItem("access", response.data.access)

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

  async addToCart() {
    let response = await axios.get("http://127.0.0.1:8000/api/store/product/");
    console.log(response.data)
  }
  render() {
    console.log(this.state.user)
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
            <Route exact path='/' component={Home} />
              <Route exact path="/register" >
                <Registration registerUser={this.userRegister} />
                </Route>
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
                render={(props) => <RoutineBuilder {...props} userPreferences={this.state.userPreferences} handleUserPreferences={this.handleUserPreferences} />}
              />
            
               <Route
                path="/addtocart"
                render={(props) => <AddToCart {...props} />}
              />
              <Route
                path="/viewcart"
                render={(props) => <ViewCart {...props} />}
              />
              <Route
                path="/checkout"
                render={(props) => <Checkout {...props} />}
              />
               <Route
                path="/success"
                render={(props) => <SuccessPage {...props} />}
              />
              <Route
                path="/results"
                render={(props) => <Results {...props} userPreferences={this.state.userPreferences} products={this.state.products}/>}
              />


              
              {/* <Route
                path="/delivery"
                render={(props) => <Delivery {...props} />}
              /> */}
              {/* <Route
                path="/account"
                render={(props) => <AccountDetails {...props} />}
              /> */}
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
