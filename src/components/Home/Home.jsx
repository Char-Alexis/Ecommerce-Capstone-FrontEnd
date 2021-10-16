import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <img src="/images/startjourney.png" alt=""/>
      <header>SPOTLIGHT</header>
        <div>
          <img src="/images/serum.png" alt=""/>
          <h1>Skin Care Tips</h1>
          {/* <a href="/login" className="signup-image-link">Learn More</a> */}
        </div>
        <div>
          <img src="/images/cream.png" alt=""/>
          <h1>.....</h1>
        </div>
        <div>
          <img src="/images/bar.png" alt=""/>
          <h1>Skin Care Myths</h1>
      </div>
    </div>
  );
}
export default Home;
