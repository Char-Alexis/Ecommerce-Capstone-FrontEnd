import React from "react";
import Footer from "../Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div>
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
          <h1>More than skin deep</h1>
          <h5>Lets Rethink Plastic</h5>

          <p>Part of my ongoing effort to shed light on reducing waste and improving sustainability efforts in packaging practices.</p>
          </div>
        </div>
      </div>
    </div>   
    <Footer></Footer> 
  </div>
  );
}
export default Home;
