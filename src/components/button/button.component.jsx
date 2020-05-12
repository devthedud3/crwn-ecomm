import React from 'react';
import './button.style.scss';

const ButtonInput = ({ children, ...otherProps }) => (
  <button className="button" {...otherProps}>
    {children}
  </button>
);

export default ButtonInput;
