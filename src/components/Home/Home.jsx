import React from "react";
import Footer from "../Footer/Footer";
import Carousel from "./Carousel";
import "./Home.css";

function Home() {
  return (
    <div class="main-title">
      <h1>More than skin deep</h1>
    <div className="landing-page">
      <div className="container">
        <div class="row">
      <div class="col">
        <img src="/images/serumphoto.png" className="roundimg"/>
      </div>
      <div class="col">
        <img src="/images/facephoto.png" className="roundimg" />
      </div>
          <div class="col">
          <h3>Lets Rethink Plastic</h3>

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
