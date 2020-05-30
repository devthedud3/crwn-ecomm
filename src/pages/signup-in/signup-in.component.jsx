import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignPageContainer } from './signup-in.style';

const SignPage = () => (
  <SignPageContainer>
    <SignIn />
    <SignUp />
  </SignPageContainer>
);
export default SignPage;
