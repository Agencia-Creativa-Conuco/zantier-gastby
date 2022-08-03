import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../components/featured-media";
import { LeftArrowIcon, RightArrowIcon } from "../../components/icons";
import { container, mq } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";
import Carousel from "react-slick";
import { css } from "@emotion/react";
import { FadeUp, fadeTop } from "../../components/animation/animation";
import { InView } from "react-intersection-observer";
import { animated, config, Spring } from "@react-spring/web";
import useModal from "../../hooks/useModal";

const HomeTestimonials = () => {
  const images = useFiles();
  const { openModal, ModalUI } = useModal();


  const data = [
    {
      featuredImage: images.home.smile_1,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ",
    },
    {
      featuredImage: images.home.smile_2,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      featuredImage: images.home.smile_3,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    }
  ];

  const Arrows = (props) => {
    const Arrow = styled.div`
      ${({color = "white" }) => css`
        border-radius: 50%;
        background-color: #bc0e03;
        border: 3px solid white;
        color: ${color};
        margin: 0 3rem;
        z-index: 2;
        position: absolute;
        top: 50%;

        ${mq.md} {
          display: block !important;
          width: 5rem;
          height: 5rem;
          padding: 1rem;
          margin: 0 1rem;
        }
        ${mq.xl} {
          margin: 0 -2%;
        }
        &:focus {
          background-color: #aa1107;
          color: ${color};
        }
        &:hover {
          background-color: #aa1107;
          color: ${color};
        }
        &:before {
          content: initial;
        }
      `}
    `;

    return <Arrow {...props} />;
  };

  return (
    <Section Container>
      <Container>
        <Carousel
          infinite={false}
          slidesToShow={3}
          prevArrow={
            <Arrows>
              <LeftArrowIcon />
            </Arrows>
          }
          nextArrow={
            <Arrows>
              <RightArrowIcon />
            </Arrows>
          }
          responsive={[
            {
              breakpoint: mq.lgv,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: mq.mdv,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {data.map((item, index) => {
            return (
              <InView threshold={0.3} key={index}>
                {({ ref, inView }) => (
                  <Card key={index} ref={ref}>
                    <Spring
                      reset={inView}
                      reverse={!inView}
                      config={config.molasses}
                      {...fadeTop}
                    >
                      {(styles) => (
                        <animated.div style={styles}>
                          <FeaturedMedia
                            media={item.featuredImage}
                            size="70.25%"
                            onClick={openModal}
                          />
                        </animated.div>
                      )}
                    </Spring>
                    <Spring
                      reset={inView}
                      reverse={!inView}
                      delay={700}
                      config={config.molasses}
                      {...FadeUp}
                    >
                      {(styles) => (
                        <animated.div style={styles}>
                          <Content>
                            <Copy>{item.copy}</Copy>
                          </Content>
                        </animated.div>
                      )}
                    </Spring>
                  </Card>
                )}
              </InView>
            );
          })}
        </Carousel>
      </Container>
      <ModalUI>
       <h2>Hola</h2>
       </ModalUI>
    </Section>
 
  );
};

export default HomeTestimonials;

const Section = styled.section`
  padding-top: 6.6rem;

  background-color: #bc0e03;

  padding-bottom: 30rem;
  ${mq.md} {
    padding-top: 9.5rem;
  }
`;

const Container = styled.div`
  ${container}
  padding: 0;

  img {
    border-radius: 0 0 5rem 5rem;
  }
`;

const Card = styled.div`
  border-radius: 6.5rem;
  display: grid !important;
  background-color: white;
  margin: 0 auto;
  overflow: hidden;
  max-width: 30rem;
`;

const Content = styled.div`
  padding: 2rem 5rem;
  position: relative;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 1rem;
    width: 3rem;
    padding-bottom: 3rem;
    border-radius: 100%;
    background-color: #bc0e03;
  }
`;
const Copy = styled.div``;
