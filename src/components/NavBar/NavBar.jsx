import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ username }) => {
  return (
    <React.Fragment>
      {/* {username && <h5> Welcome {username.username} </h5>} */}
      <header id="section-header" role="banner">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">
              <Link as={Link} to="/">
                Home <span className="sr-only"></span>
              </Link>
            </a>

            <Link as={Link} to="/products">
              <a className="nav-item nav-link">Shop All</a>
            </Link>

            <Link as={Link} to="/routine">
              <a className="nav-item nav-link" href="/routine">
                Routine Builder
              </a>
            </Link>

             <Link as={Link} to="/delivery">
              <a className="nav-item nav-link" href="/delivery">
                Delivery
              </a>
                </Link>
            <Link as={Link} to="/login">
              <a className="nav-item nav-link" href="/login">
                Login
              </a>
            </Link>
            {/* <Link as={Link} to="/account">
              <a className="nav-item nav-link" href="/account">
                Account
              </a>
            </Link> */}
             <Link as={Link} to="/viewcart">
              <a className="nav-item nav-link" href="/viewcart">
                🛒
              </a>
            </Link>
          </div>
        </div>
      </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
