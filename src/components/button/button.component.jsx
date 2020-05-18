import React from 'react';
import './button.style.scss';

const ButtonInput = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'googleButton' : ''} button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default ButtonInput;
