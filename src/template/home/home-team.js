import styled from "@emotion/styled";
import React from "react";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";

const HomeTeam = () => {
  const images = useFiles();
  const data = [
    {
      title: "Maria Celeste Arraraz",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.cover,
    },
    {
      title: "Robert Sosa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.cover,
    },
    {
      title: "Robert Sosa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.cover,
    },
    {
      title: "Maria Celeste Arraraz",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.cover,
    },
    {
      title: "Maria Celeste Arraraz",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.cover,
    },
    {
      title: "Robert Sosa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.cover,
    },
    {
      title: "Maria Celeste Arraraz",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.cover,
    },
  ];

  return (
    <Section fluid>
      <Container>
        {data.map((item) => {
          return (
            <CardContainer>
              <Media>
                <FeaturedMedia
                  media={item.featuredImage}
                  size="100%"
                  rounded
                  bgColor="#bc0e05 "
                />
              </Media>
              <Card>
                <Deco />
                <Title>{item.title}</Title>
                <Copy>{item.copy}</Copy>
              </Card>
            </CardContainer>
          );
        })}
      </Container>
    </Section>
  );
};

export default HomeTeam;


const Section = styled.section`
  ${container}
  margin-bottom: 6.6rem;

${mq.md}{
margin-bottom: 9.5rem;

}
`;



const Container = styled.div`
  position: relative;
  display: flex;
  padding: 0;
  gap:2rem 7rem;
  flex-wrap: wrap;
  justify-content: center;
  
  ${mq.md}{
      
      margin-top:-5rem;
}



`;

const CardContainer = styled.div`
display:grid ;
justify-content:center;
grid-template-columns: 100%;

`    

const Media = styled.div`
position: relative;
    max-width: 23rem;
    margin: 0 auto;
    width: 23rem;
    background: white;
    padding: 3rem;
    border-radius: 100%;

  img {
    clip-path: ellipse(95% 100% at 50% 100%);
    z-index:5;
  }
`;


const Card = styled.div`
background-color:rgb(245 246 248);
margin: -5rem auto 0;
z-index: 2;


padding: 3.5rem  4rem;
border-radius: 3.5rem;
${mq.md}{
    max-width: 36rem;
 
}




`

const Title = styled.h3`
color:#bc0e03 ;
text-align: center;

`;

const Copy = styled.p`
padding: 0rem 0  ;

color:#9f9fa0 ;


`;

const Deco = styled.div`
position:relative ;


}
`;

