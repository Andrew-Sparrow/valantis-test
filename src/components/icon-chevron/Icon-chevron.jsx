import React from 'react';
import { HandySvg } from 'handy-svg';

export const IconChevronLeft = () => (
  <HandySvg
    className="prev-icon"
    src={process.env.PUBLIC_URL + '/img/icons/Chevron_Left.svg'}
    width="24"
    height="24"
  />
);

export const IconChevronRight = () => (
  <HandySvg
    className="next-icon"
    src={process.env.PUBLIC_URL + '/img/icons/Chevron_Right.svg'}

    width="24"
    height="24"
  />
);
