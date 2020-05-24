import React from 'react';
import './button.style.scss';

const ButtonInput = ({ children, isSubmit, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'googleButton' : ''} ${
      isSubmit ? 'submit' : ''
    } button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default ButtonInput;
