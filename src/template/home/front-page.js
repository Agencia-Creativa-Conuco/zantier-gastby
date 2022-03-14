import React from "react";
import HomeCover from "./home-cover";
import HomeService from "./home-service";



const FrontPage = ({ page }) => {

    return (
      <article>
       <HomeCover/>
       <HomeService/>
      </article>
    )
  }
  
  export default FrontPage