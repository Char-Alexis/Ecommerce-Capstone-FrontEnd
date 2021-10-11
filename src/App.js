import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

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
      <Registration />
      <Login />
    </div>
  );
}

export default App;
