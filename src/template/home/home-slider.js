import React, { useState } from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../components/featured-media";
import { LeftArrowIcon, RightArrowIcon } from "../../components/icons";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";
import Carousel from "react-slick";
import { css } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import {
  BackgroundAnimation,
  centerScaleAnimation,
} from "../../components/animation/animation";
import ReactPlayer from "react-player";
import { useEffect } from "react";

const HomeSlider = () => {
  const images = useFiles();

  const [state, setSate] = useState(Number);
  const [isPlaying, setIsPlaying] = useState(Boolean);


  useEffect(()=>{
    setIsPlaying(false)
  },[state])


  const play =()=>{
    setIsPlaying(!isPlaying)
    return true
  }


  const { ref, inView } = useInView({
    rootMargin: "10%",
  });

  const data = [
    {
      url: "https://www.youtube.com/watch?v=zTlsRe5202o",
    },
    {
      url: "https://www.youtube.com/watch?v=dmW68lzaaqs",
    },
  ];



  const Arrows = (props) => {
    const Arrow = styled.div`
      ${({ bgColor = "#9f9f9f", color = "#e5e7e3" }) => css`
        border-radius: 50%;
        background-color: ${bgColor};
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
          margin: 0 -6rem;
        }
        &:focus {
          background-color: ${bgColor};
          color: ${color};
        }
        &:hover {
          background-color: ${bgColor};
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
    <Section ref={ref}>
      <Container>
        <Carousel
        infinite={false}
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
          afterChange={play}
        >
          {data.map((item, key) => {

            console.log(item, key)
            return (
              <Media key={key} animate={inView ? BackgroundAnimation : "none"}>
                <CWrapper animate={inView ? centerScaleAnimation : "none"}>
                  <Playing onClick={() => setIsPlaying(!isPlaying)} />
                  <MWrapper animate={inView ? centerScaleAnimation : "none"}>
                    <Video
                      width="100%"
                      height="100%"
                      controls
                      url={item.url}
                      playing={state !== key && isPlaying }
                      onPause={()=>isPlaying}
                      onPlay={()=> setSate(key)}
                    />
                  </MWrapper>
                </CWrapper>
              </Media>
            );
          })}
        </Carousel>
      </Container>
    </Section>
  );
};

export default HomeSlider;

const Section = styled.section`
  padding-bottom: 6.6rem;
  padding-top: 6.6rem;
  background: #f4f7fc;

  ${mq.md} {
    padding-bottom: 9.5rem;
    padding-top: 9.5rem;
  }
`;

const Container = styled.div`
  ${container}
  /* background:red ; */
  &::before {
    content: "";
    top: 20%;
    right: -2.5%;
    position: absolute;
    width: 10%;
    padding-bottom: 10%;
    background-color: #bc0e03;
    border-radius: 100%;
    z-index: 44;
  }
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
  z-index: 2;
  background: blue;

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
  z-index: 55;
`;
