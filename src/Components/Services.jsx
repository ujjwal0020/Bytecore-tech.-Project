import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/6.jpg";
import img2 from "../assets/7.jpg";
import "../Styles/Services.scss";
const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img className="img1" src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img className="img2" src={img2} alt="Item3" />
          <p className="legend">Video Editing</p>
        </div>
        <div>
          <img className="img2" src={img1} alt="Item3" />
          <p className="legend">image Editing</p>
        </div>
        <div>
          <img className="img2" src={img2} alt="Item3" />
          <p className="legend">sound Editing</p>
        </div>
        <div>
          <img className="img2" src={img1} alt="Item3" />
          <p className="legend">App Developement</p>
        </div>
        <div>
          <img className="img2" src={img2} alt="Item3" />
          <p className="legend">Software Developer</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;