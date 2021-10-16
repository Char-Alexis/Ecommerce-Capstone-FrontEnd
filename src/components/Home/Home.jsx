import React from "react";
import "./Home.css";
import {Card} from "react-bootstrap";

function Home() {
  return (
      // <header>SPOTLIGHT</header>
    // <div className="row">
    // <Card>
    //   <Card.Body className="d-flex justify-content-center">
    //   <img src="/images/startjourney.png" alt=""/>
    //     <div style={{width:800}} className="row">
    //       <img className="card-img-top" src="/images/serum.png" alt="Card image cap"/>
    //       <div className="card-body">
    //       <h1 className="card-text">Skin Care Tips</h1>
    //       </div>
    //       {/* <a href="/login" className="signup-image-link">Learn More</a> */}
    //     </div>
    //       </Card.Body>
    //       <Card.Body className="d-flex justify-content-center">
    //     <div style={{width:785}}>
    //       <img className="card-img-top" src="/images/cream.png" alt="Card image cap"/>
    //       <div className="card-body">
    //       <h1 className="card-text">...</h1>
    //       </div>
    //     </div>
    //       </Card.Body>
    //       <Card.Body className="d-flex justify-content-center">

    //     <div style={{width:785}}>
    //       <img className="card-img-top"src="/images/bar.png" alt="Card image cap"/>
    //       <div className="card-body">
    //       <h1 className="card-text">Skin Care Myths</h1>
    //       </div>
    //     </div>
    //     </Card.Body>
    //   </Card>
    // </div>



  // <div>
  //     <img src="/images/startjourney.png" alt=""/>
  //   <div className="container">
  //     <div class="row">
  //     <div class="column">
  //       <div>
  //         <div class="card" >
  //           <img class="card__image" src="/images/serum.png" alt=""/>
  //           <div class="card-body">
  //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //           </div>
  //         </div>

  //         <div class="card" >
  //           <img class="card__image" src="/images/cream.png" alt=""/>
  //           <div class="card-body">
  //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //           </div>
  //         </div>

  //         <div class="card" >
  //           <img class="card__image" src="/images/bar.png" alt=""/>
  //           <div class="card-body">
  //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //           </div>
  //         </div>    
  //       </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
 
  
    <div>
        <div className="row">
          <img src="/images/startjourney.png" alt=""/>
        </div>

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
