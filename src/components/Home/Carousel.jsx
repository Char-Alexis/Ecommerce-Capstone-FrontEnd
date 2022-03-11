import React from "react";
import "./Carousel.css";


function Slider() {
    return(
    <div class="title">
      <h1>The Impact</h1>
        <div class="containerCarousel">
                {/* <div class="col-sm-12"> */}
                <div id="carouselSlider" class="carousel slide" data-ride="carousel">

                {/* indicators */}
                <ol class="carousel-indicators">
                    <li data-target="#carouselSlider" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselSlider" data-slide-to="1"></li>
                    <li data-target="#carouselSlider" data-slide-to="2"></li>
                </ol>
                {/* wrapper */}
                <div class="carousel-inner" >
                    <div class="carousel-item active">
                    <img src="/images/plasticwaste.png" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img  src="/images/sourcing.png" alt="Second slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Responsible Sourcing</h1>
                        <h3>We audit and research ecotoxicity and biodegradability of every ingredient</h3>

                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="/images/co2.png" alt="Third slide"/>
                     <div class="carousel-caption d-none d-md-block">
                         <h1>CO2 emissions direct impact on global warming</h1>
                        <h3 className="top-left">Lets continue to reduce and offset the carbon footprint of product packaging and transportation!</h3>
                    </div>
                    </div>
                </div>
                {/* controls for next and prev buttons */}
                <a class="carousel-control-prev" href="#carouselSlider" role="button" data-slide="prev">
                    <span class="sr-only">Previous</span>
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselSlider" role="button" data-slide="next">
                    <span class="sr-only">Next</span>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
                </div>
            </div>
        </div>
    )
}
export default Slider;
