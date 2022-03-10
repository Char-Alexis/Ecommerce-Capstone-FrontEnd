import React from "react";
import "./Carousel.css";


function Slider() {
    return(
        <div class="container">
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
                    <div class="carousel-caption">
                        <h1>Plastic</h1>

                    </div>
                    </div>
                    <div class="carousel-item">
                    <img  src="/images/sourcing.png" alt="Second slide"/>
                    {/* <div class="carousel-caption d-none d-md-block">
                        <h1>hi</h1>

                    </div> */}
                    </div>
                    <div class="carousel-item">
                    <img src="/images/co2.png" alt="Third slide"/>
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
            {/* </div> */}
        </div>

    )

}
export default Slider;
