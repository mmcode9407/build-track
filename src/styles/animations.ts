import { keyframes } from "styled-components";

export const spin = keyframes`
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const fadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
