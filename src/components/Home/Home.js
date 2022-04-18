import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BestClicks from "../BestClicks/BestClicks";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="slider">
      <Carousel>
        <div>
          <img
            src="https://www.andreasampoli.com/wp-content/uploads/2018/03/Andrea-Sampoli-Italy-Wedding-Photographer-1-1.jpg"
            alt=""
          />
          <h2 className="legend fw-bold">Natural Photography</h2>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0553/6422/3136/files/Jimmy-Bui-Photography_010-_40jimmybuiphotography.jpg"
            alt=""
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://banuphotography.com/wp-content/uploads/2021/06/mannar-wedding-77.jpg"
            alt=""
          />
          <p className="legend">Legend 3</p>
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
