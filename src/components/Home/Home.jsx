import React from "react";
import Footer from "../Footer/Footer";
import Carousel from "./Carousel";
import "./Home.css";

function Home() {
  return (
    <div>
      <img src="/images/landing page.png" className="recycle" />
        <div class="landing-page-heading">
          <h1 className="heading">More than skin deep </h1>
          <div className="btn">
          <button href='#' className="button"> Shop Now</button>
          </div>
          </div>
          <div className="landing-page">
            <h1 className="heading-two">Refill Revolution</h1>
            <div className="container">
              <div class="row">
                <div class="col">
                  <img src="/images/serumphoto.png" className="roundimg"/>
                  </div>
                  <div class="col">
                    <img src="/images/facephoto.png" className="roundimg" />
                    </div>
                    <div class="col">
                      <h1>Lets Rethink Plastic</h1>
                      <p>Part of my ongoing effort to shed light on reducing waste and improving sustainability efforts in packaging practices.</p>
                      </div>
                      </div>
                      </div>
                      </div>
                      <Carousel></Carousel> 
                      <Footer></Footer>
                      </div>
);
}
export default Home;
