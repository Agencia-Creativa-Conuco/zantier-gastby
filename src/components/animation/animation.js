import { keyframes } from "@emotion/react";


export const TextAnimation = keyframes`

  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}

`;


export const ImagesAnimation = keyframes`

  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


`;
