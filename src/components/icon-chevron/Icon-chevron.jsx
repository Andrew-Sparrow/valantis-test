import React from 'react';


export const IconChevronLeft = () => (
  <img
    className="prev-icon"
    src={process.env.PUBLIC_URL + '/assets/img/icons/Chevron_Left.svg'}
    width="24"
    height="24"
    alt="chevron left"
  />
);

export const IconChevronRight = () => (
  <img
    className="next-icon"
    src={process.env.PUBLIC_URL + '/assets/img/icons/Chevron_Right.svg'}
    width="24"
    height="24"
    alt="chevron right"
  />
);
