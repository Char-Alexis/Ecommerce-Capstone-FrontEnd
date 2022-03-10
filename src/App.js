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
import ViewCart from "./components/ViewCart/ViewCart";
import Delivery from "./components/Delivery/Delivery"
import RoutineResults from "./components/RoutineResults/Results";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import Notes from "./components/Notes/Notes";
// import Footer from "./components/Footer/Footer";
import Carousel from "./components/Home/Carousel";

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

  //Routine Builder
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
    let response = await axios.get("http://127.0.0.1:8000/api/store/product/");
    console.log(response.data);
    this.setState({
      products: response.data,
    });
  }

  // Add products to cart
  async addToCart() {
    let response = await axios.get("http://127.0.0.1:8000/api/store/product/");
    console.log(response.data)
  }

  // Delivery notes
  async getNotes() {
    let response = await axios.get("http://127.0.0.1:8000/api/store/delivery/");
    console.log(response.data);
    this.setState({
      notes: response.data,
    });
  }
  //Post Review
  // postingAReview = async (newReview) => {
  //   try{
  //     const jwt= localStorage.getItem('token');
  //     console.log("JWT:", jwt)
  //     let response = await axios.post("http://127.0.0.1:8000/api/store/review/get/", newReview,  { headers: {Authorization: 'Bearer ' + jwt}})
  //     console.log(response)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  //   this.getCredentials()
  // }

  successMessageForDelivery = () => {
    alert('Success! :)')
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
              />
              <Route
                exact
                path="/details/:id"
                render={(props) => (
                  <ProductDetails {...props} details={this.state.products} user={this.state.user}/>
                )}
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
                  <ReviewForm productId={this.state.review} user={this.state.user} />
                )}
              />
              <Route
                path="/routine"
                render={(props) => <RoutineBuilder {...props} userPreferences={this.state.userPreferences} handleUserPreferences={this.handleUserPreferences} />}
              />
              <Route
                path="/viewcart"
                render={(props) => <ViewCart {...props} />}
              />
              <Route
                path="/results"
                render={(props) => <RoutineResults {...props} userPreferences={this.state.userPreferences} products={this.state.products}/>}
              />
              <Route
                path="/delivery"
                render={(props) => <Delivery {...props} popUp={this.successMessageForDelivery}/>}
              />
              {/* <Route
                path="/account"
                render={(props) => <AccountDetails {...props} />}
              /> */}
                <Route
                path="/notes/:id"
                render={(props) => <Notes {...props} />}
              />
         
            </Switch>
          </div>
     
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

