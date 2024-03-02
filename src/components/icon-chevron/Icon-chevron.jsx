import React from 'react';
import { HandySvg } from 'handy-svg';
import ChevronLeft from './../../img/icons/Chevron_Left.svg';
import ChevronRight from './../../img/icons/Chevron_Right.svg';

export const IconChevronLeft = () => (
  <HandySvg
    className="prev-icon"
    src={ChevronLeft}
    width="24"
    height="24"
  />
);

export const IconChevronRight = () => (
  <HandySvg
    className="next-icon"
    src={ChevronRight}
    width="24"
    height="24"
  />
);
