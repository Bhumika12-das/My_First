import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "C:\Users\pc\Downloads\home-banner-background.png";
import BannerImage from  "C:\Users\pc\Downloads\home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
impoet {FiArrowRight} from "react-icons/fi";
const Home = () => {
  return (
   <div className="home-container">
    <Navbar/>
    <div className="home-banner-container">
        <div className="home-bannerImage-container">
< img src ={BannerBackground} alt** /> 
        </div>
        <div className="home-text-section">
            <h1 className="primary-heading">
                Your Favourite food Delivered Hot & Fresh
            </h1>
<p className="primary-text">
    Healthy switcher Chef do all the prep work,like peeding,
    chopping,marinating so you can cook a fresh food
</p>
<button className="secondary-button">
Order now <FiArrowRight/>
</button>
        </div>
    </div>
  </div>;
  );
};

export default Home;