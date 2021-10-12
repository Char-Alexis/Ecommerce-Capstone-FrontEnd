import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import jwtDecode from "jwt-decode";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";

function App() {
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

  return (
    <div>
      <NavBar />
      <Home />
      <Registration />
      <Login />
      <Products {...props} productList={this.state.products} />
    </div>
  );
}

export default App;
