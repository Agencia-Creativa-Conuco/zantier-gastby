import React, { useState } from "react";
import styled from "@emotion/styled";
import { container, mq } from "../../components/grid/index";
import Carousel from "react-slick";
import {
  centerScaleAnimationCss,
  FadeUp,
} from "../../components/animation/animation";
import ReactPlayer from "react-player";
import { InView, useInView } from "react-intersection-observer";
import { animated, config, Spring } from "@react-spring/web";

const HomeSlider = () => {
  const [isPlaying, setIsPlaying] = useState(Boolean);

  const Pause = () => {
    setIsPlaying(false);
  };
  const [isRef, isView] = useInView({
    threshold: 0,
  });

  const data = [
    {
      url: "https://www.youtube.com/watch?v=zTlsRe5202o",
    },
    {
      url: "https://www.youtube.com/watch?v=dmW68lzaaqs",
    },
  ];

  return (
    <Section>
      <Spring pause={!isView} config={config.gentle} delay={300} {...FadeUp}>
        {(styles) => (
          <animated.div style={styles}>
            <Container ref={isRef}>
              <Title>Experiencia Zantier</Title>
              <Carousel infinite={false} afterChange={Pause} fade>
                {data.map((item, key) => {
                  return (
                    <InView threshold={1} key={key}>
                      {({ ref, inView }) => (
                        <Media ref={ref} key={key}>
                          <Playing onClick={() => setIsPlaying(!isPlaying)} />

                          <CWrapper
                            animate={isView ? centerScaleAnimationCss : "none"}
                          >
                            <MWrapper
                              animate={
                                isView ? centerScaleAnimationCss : "none"
                              }
                            >
                              <Video
                                width="100%"
                                height="100%"
                                controls
                                url={item.url}
                                playing={isPlaying && inView}
                              />
                            </MWrapper>
                          </CWrapper>
                        </Media>
                      )}
                    </InView>
                  );
                })}
              </Carousel>
            </Container>
          </animated.div>
        )}
      </Spring>
    </Section>
  );
};

export default HomeSlider;

const Section = styled.section`
  padding-bottom: 5rem;
  padding-top: 5rem;
  background: #f4f7fc;

  .slick-list {
  }
  /* #9f9f9f */
  .slick-arrow {
    z-index: 2;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 0;
    display: flex;
    align-items: center;
    &:before {
      font-size: 3rem;
      color: #bc0e03;
    }
  }
  .slick-next {
    transform: translate(0%, 0);
    ${mq.lg} {
      transform: translate(100%, 0);
    }
  }
  .slick-prev {
    transform: translate(-0%, 0);
    ${mq.lg} {
      transform: translate(-100%, 0);
    }
  }
`;

const Container = styled.div`
  ${container}

  ${mq.md} {
    &::before {
      content: "";
      top: 20%;
      right: -2.5%;
      position: absolute;
      width: 10%;
      padding-bottom: 10%;
      background-color: #bc0e03;
      border-radius: 100%;
      z-index: 6;
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 2rem;
`;

const Media = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  clip-path: ellipse(95% 100% at 50% 100%);
  border-radius: 0 0 4rem 4rem;
`;

const CWrapper = styled.div`
  background-color: #bc0e03;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${(props) => props.animate} 2.1s ease-in-out;
  /* clip-path: inset(0% 100% 0% 100%); */
`;

const MWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: ${(props) => props.animate} 1.8s ease-in-out;
  animation-delay: 0.3s;
  /* clip-path: inset(0% 100% 0% 100%); */
`;

const Playing = styled.div`
  width: 100%;
  position: absolute;
  height: calc(100% - 23.7%);
  z-index: 30;

  ${mq.sm} {
    height: calc(100% - 13.7%);
  }
  ${mq.md} {
    height: calc(100% - 10.7%);
  }

  ${mq.lg} {
    height: calc(100% - 12.2%);
  }
  ${mq.xl} {
    height: calc(100% - 9.2%);
  }
`;

const Video = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border-radius: 0 0 4rem 4rem;
  z-index: 5;
`;
