import React from "react";
import "./Home.css";
import {Card} from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="row">
        <img src="/images/startjourney.png" alt=""/>
      </div>
      <h1> SPOTLIGHT </h1>

    <div className="container">
      <div className="card__wrap--outer">
        <div className="card__wrap--inner">
        <div class="card" >
          <img className="card__image flexible " src="/images/serum.png" style={{width:400}} alt=""/>
          </div>
        <div class="card" >
          <img className="card__image flexible"src="/images/cream.png" style={{width:400}} alt=""/>
        </div>
          <div class="card" >
            <img className="card__image flexible" src="/images/bar.png" style={{width:400}} alt=""/>
          </div>
          </div>    
        </div>
      </div>
    </div>
        
 
  );
}
export default Home;
