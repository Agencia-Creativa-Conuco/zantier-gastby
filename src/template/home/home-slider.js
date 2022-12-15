import React, { useState } from "react";
import styled from "@emotion/styled";
import { container, mq } from "../../components/grid/index";
import Carousel from "react-slick";
import {
  centerScaleAnimationCss,
  FadeUp,
} from "../../components/animation/animation";
import { InView, useInView } from "react-intersection-observer";
import { animated, config, Spring } from "@react-spring/web";
import Comercial from "../../videos/comercial.webm";
import ComercialMp4 from "../../videos/comercial.mp4";
import Testimonio from "../../videos/testimonio.webm";
import TestimonioMp4 from "../../videos/testimonio.mp4";
import Video1 from "../../videos/video1.webm";
import Video1Mp4 from "../../videos/video1.mp4";
import Video2 from "../../videos/video2.webm";
import Video2Mp4 from "../../videos/video2.mp4";
import colors from "../../components/styles/colors";
import useFiles from "../../hooks/useFiles";

const HomeSlider = () => {
  const [isPlaying, setIsPlaying] = useState(Boolean);
  const images = useFiles();

  const Pause = () => {
    setIsPlaying(false);
  };
  const [isRef, isView] = useInView({
    threshold: 0,
  });

  const data = [
    {
      video: Comercial,
      mp4: ComercialMp4,
      portada: images.portadas.virtual,
    },
    {
      video: Testimonio,
      mp4: TestimonioMp4,
      portada: images.portadas.complicidad,
    },
    {
      video: Video1,
      mp4: Video1Mp4,
      portada: images.portadas.timida,
    },
    {
      video: Video2,
      mp4: Video2Mp4,
      portada: images.portadas.proceso,
    },
  ];

  return (
    <Section>
      <Spring pause={!isView} config={config.gentle} delay={300} {...FadeUp}>
        {(styles) => (
          <animated.div style={styles}>
            <Container ref={isRef}>
              <Title>Experiencia Zantier</Title>
              <Carousel infinite={false} afterChange={Pause}>
                {data.map((item, key) => {
                  return (
                    <InView threshold={1} key={key}>
                      {({ ref, inView }) => (
                        <Media ref={ref} key={key}>
                          {/* <Playing onClick={() => setIsPlaying(!isPlaying)} /> */}

                          <CWrapper
                            animate={isView ? centerScaleAnimationCss : "none"}
                          >
                            <MWrapper
                              animate={
                                isView ? centerScaleAnimationCss : "none"
                              }
                            >
                              <Video
                                controls
                                onClick={(e) => {
                                  e.target.play = !e.target.play;
                                }}
                                poster={
                                  item?.portada?.childImageSharp?.fluid?.srcWebp
                                }
                                preload="none"
                              >
                                <source src={item.video} type="video/webm" />
                                <source src={item.mp4} type="video/mp4" />
                              </Video>
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
  background: ${colors.gray.light};

  .slick-list {
    border-radius: 1rem;
    overflow: hidden;
  }
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
      color: ${colors.red.base};
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
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, 150%);
      width: 10%;
      padding-bottom: 10%;
      background-color: ${colors.red.light};
      border-radius: 100%;
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translate(-50%, -100%);
      width: 5%;
      padding-bottom: 5%;
      background-color: ${colors.red.light};
      border-radius: 100%;
      z-index: -1;
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
`;

const CWrapper = styled.div`
  background-color: ${colors.red.base};
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

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
`;
