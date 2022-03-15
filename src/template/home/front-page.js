import React from "react";
import HomeAbout from "./home-about";
import HomeCover from "./home-cover";
import HomeService from "./home-service";
import HomeSlider from "./home-slider";
import HomeTeam from "./home-team";



const FrontPage = () => {

    return (
      <section>
       <HomeCover/>
       <HomeService/>
       <HomeAbout/>
       <HomeTeam/>
       <HomeSlider/>
      </section>
    )
  }
  
  export default FrontPage