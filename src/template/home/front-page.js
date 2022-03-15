import React from "react";
import HomeAbout from "./home-about";
import HomeCover from "./home-cover";
import HomeService from "./home-service";



const FrontPage = () => {

    return (
      <article>
       <HomeCover/>
       <HomeService/>
       <HomeAbout/>
      </article>
    )
  }
  
  export default FrontPage