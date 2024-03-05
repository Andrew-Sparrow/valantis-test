import React from 'react';
import { HandySvg } from 'handy-svg';
// import ChevronLeft from './../../img/icons/Chevron_Left.svg';
// import ChevronRight from './../../img/icons/Chevron_Right.svg';

export const IconChevronLeft = () => (
  <img
    className="prev-icon"
    src={process.env.PUBLIC_URL + 'assets/img/icons/Chevron_Left.svg'}
    width="24"
    height="24"
    alt="chevron left"
  />
);

export const IconChevronRight = () => (
  <HandySvg
    className="next-icon"
    src={process.env.PUBLIC_URL + 'assets/img/icons/Chevron_Right.svg'}
    width="24"
    height="24"
    alt="chevron right"
  />
);
