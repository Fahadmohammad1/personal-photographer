import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BestClicks from "../BestClicks/BestClicks";
import Services from "../Services/Services";
import "./Home.css";
import banner1 from "../../images/banner/banner-1.png";
import banner2 from "../../images/banner/banner-2 .png";

const Home = () => {
  return (
    <div className="slider">
      <Carousel>
        <div>
          <img
            src="https://www.andreasampoli.com/wp-content/uploads/2018/03/Andrea-Sampoli-Italy-Wedding-Photographer-1-1.jpg"
            alt=""
          />
          <h2 className="legend fw-bold">Shine like Sun</h2>
        </div>
        <div>
          <img src={banner2} alt="" />
          <p className="legend">Cool like Evening</p>
        </div>
        <div>
          <img src={banner1} alt="" />
          <p className="legend">Glow like Moon</p>
        </div>
      </Carousel>
      <div>
        <BestClicks></BestClicks>
      </div>
      <div>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
