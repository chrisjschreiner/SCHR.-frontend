import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};

export const iPadsAndTablets = (props) => {
  return css`
    @media only screen and (min-width: 481px) and (max-width: 768px) {
      ${props}
    }
  `;
};

export const ordersum = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};
