import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signup-in.style.scss';

const SignPage = () => (
  <div className="page-container">
    <SignIn />
    <SignUp />
  </div>
);
export default SignPage;
