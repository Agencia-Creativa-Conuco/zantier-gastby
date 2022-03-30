import { keyframes } from "@emotion/react";
import { config } from "@react-spring/web";

export const FadeUp = keyframes`

  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }

`;

export const TextAnimationRight = keyframes`

  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }

`;

export const TextAnimationLeft = keyframes`

  0% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0);
  }

`;

export const FadeIn = keyframes`

  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }


`;

export const ImagesAnimationLeft = keyframes`

  0% {

    width: 0;
    height:0 ;
    left:0;

  }
  100% {
    width: 100%;
    height:100% ;


  }


`;
export const BackgroundAnimation = keyframes`

  0% {


    opacity:0 ;
    margin: 0 auto;
  }
  100% {

    opacity:1;
    margin: 0 auto;
    width: 100%;

  }

`;

export const centerScaleAnimation = keyframes`

  0% {
    clip-path: inset(0% 100% 0% 100%);
    opacity: 0;
  }
  100% {
    clip-path: inset(0% 0% 0% 0%);
    opacity: 1;
  }

`;

export const FadeUp1 = {
  from: {
    opacity: 0,
    transform: `translateY(20rem)`,
  },
  to: { opacity: 1, transform: "translateY(0)" },
  // config: config.wobbly,
};

export const TextAnimationRight1 = {
  from: {
    opacity: 0,
    transform: `translateX(200px)`,
  },
  to: {
    opacity: 1,
    transform: `translateX(0)`,
  },
  config: config.molasses,
};

export const TextAnimationLeft1 = {
  from: {
    opacity: 0,
    transform: `translateX(-200px)`,
  },
  to: {
    opacity: 1,
    transform: `translateX(0)`,
  },
  config: config.molasses,
};

export const FadeIn1 = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
  config: config.molasses,
};
