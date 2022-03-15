import styled from "@emotion/styled";
import React from "react";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";

const HomeAbout = () => {
  const images = useFiles();
  const data = {
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

    featuredImage: images.home.img2,
  };

  return (
    <Section fluid>
      <Media>
        <FeaturedMedia
          media={data.featuredImage}
          size="100%"
          sizeMD="90%"
          sizeXL="54.25%"
        />
        <Card>
          <Copy>{data.copy}</Copy>
          <Deco />
        </Card>
      </Media>
    </Section>
  );
};

export default HomeAbout;


const Section = styled.section`
  background: #bc0e03;
  ${container}
  padding: 0;
`;


const Media = styled.div`
position:relative ;

  img {
    clip-path: ellipse(95% 100% at 50% 100%);
  }
`;


const Card = styled.div`
background-color:white ;

padding: 3rem  5rem;
${mq.md}{
    position:absolute;

    max-width: 36rem;
    border-radius: 2rem;
    top: 25%;
    left: 13%;
}



`

const Copy = styled.p`
padding: 10rem 0  ;
color:#bc0e03 ;


`;
const  Deco = styled.div `
position:relative  ;

  &::before  {
    content: "";
    position: absolute;
    background: #bc0e03;
    width: 35%;
    padding-bottom: 13%;
    bottom: 0;
    border-radius: 2.8rem;
}
&::after {
    content: "";
    position: absolute;
    background: #bc0e03;
    width: 13%;
    padding-bottom: 13%;
    left: 37%;
    bottom: 0;
    border-radius: 100%;
  }



`