import React  from "react";
import HomeAbout from "./home-about";
import HomeContact from "./home-contact";
import HomeCover from "./home-cover";
import HomeDescription from "./home-description";
import HomeForm from "./home-form";
import HomeService from "./home-service";
import HomeSlider from "./home-slider";
import HomeTeam from "./home-team";
import HomeTestimonials from "./home-testimonials";

const FrontPage = () => {


  return (
    <section  >
      <HomeCover />
      <HomeService />
      <HomeAbout />
      <HomeTeam />
      <HomeSlider />
      <HomeContact />
      <HomeDescription />
      <HomeTestimonials />
      <HomeForm />
    </section>
  );
};

export default FrontPage;
