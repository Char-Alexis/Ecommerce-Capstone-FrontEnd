import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <React.Fragment>
      {user && <h5> Welcome {user.username} </h5>}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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

            <Link as={Link} to="/login">
              <a className="nav-item nav-link" href="/login">
                Login
              </a>
            </Link>

            {/* <a className="nav-item nav-link" href="#">
                Cart
              </a> */}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
