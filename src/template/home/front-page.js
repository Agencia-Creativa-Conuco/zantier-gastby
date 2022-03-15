import React from "react";
import HomeAbout from "./home-about";
import HomeCover from "./home-cover";
import HomeService from "./home-service";
import HomeTeam from "./home-team";



const FrontPage = () => {

    return (
      <article>
       <HomeCover/>
       <HomeService/>
       <HomeAbout/>
       <HomeTeam/>
      </article>
    )
  }
  
  export default FrontPage