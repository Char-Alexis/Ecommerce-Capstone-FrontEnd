import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <React.Fragment>
      {user && <h5> Welcome {user.username} </h5>}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Logo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">
              <Link as={Link} to="/">
                Home <span class="sr-only"></span>
              </Link>
            </a>

            <Link as={Link} to="/products">
              <a class="nav-item nav-link">Shop All</a>
            </Link>

            <a class="nav-item nav-link" href="/routine">
              Routine Builder
            </a>

            <Link as={Link} to="/login">
              <a class="nav-item nav-link" href="/login">
                Login
              </a>
            </Link>

            {/* <a class="nav-item nav-link" href="#">
                Cart
              </a> */}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
