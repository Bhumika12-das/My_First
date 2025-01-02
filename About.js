import React from 'react'
import AboutBackground from "c:\Users\pc\Downloads\about-background.png";
import  AboutBackgroundimage from "c:\Users\pc\Downloads\about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';
const about = () => {
  return (
    <div className = "about-section-container">
      <div className="about-background-image-container">
<img src={AboutBackground} alt=""/>
      </div>
      <div className="about-section-image-container">
        <img src ={AboutBackgroundimage} alt ="" />
      </div>
      <div className="aboout-section-text-container">
<p className="primary-subheading">About</p>
<h1 className="primary-heading">
Food is an Important Part of A Balanced Diet
</h1>
<p className="primary-text">
  Lorem ipsum dolor sit amet consectetur.Non tincidunt magna non et
  elit.Dolor turpis nolestie dui magnis facilisis at fringille quam.
</p>
<p className="primary-text">
 Non tincidunt magna non et elit.Dolor turpis nolestie dui magnis facilisis at fringille quam.
</p>
<div className="about-buttons-container">
  <button className="secondary-button">Learn More</button>
  <button className="watch-video-button">
    {" "}
    <BsFillPlayCircleFill/>Watch Video
    </button>
</div>
      </div>
      </div>
  );
};
export default About;