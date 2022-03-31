export const centerScaleAnimation = {
  from: {
    opacity: 0,
    clipPath: `inset(0% 100% 0% 100%)`,
  },
  to: {
    opacity: 1,
    clipPath: `inset(0% 0% 0% 0%)`,
  },
};

export const FadeUp = {
  from: {
    opacity: 0,
    transform: `translateY(20rem)`,
  },
  to: { opacity: 1, transform: "translateY(0)" },
  // config: config.wobbly,
};

export const TextAnimationRight = {
  from: {
    opacity: 0,
    transform: `translateX(200px)`,
  },
  to: {
    opacity: 1,
    transform: `translateX(0)`,
  },
  // config: config.molasses,
};

export const TextAnimationLeft = {
  from: {
    opacity: 0,
    transform: `translateX(-200px)`,
  },
  to: {
    opacity: 1,
    transform: `translateX(0)`,
  },
  // config: config.molasses,
};

export const FadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
  // config: config.molasses,
};
