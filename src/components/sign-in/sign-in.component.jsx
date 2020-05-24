import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form/form-input.component';
import ButtonInput from '../button/button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleClick = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = async e => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  };

  render() {
    return (
      <div className="signin">
        <div className="headline">
          <h1 className="title"> I already have an account </h1>
          <span className="subtitle">
            {' '}
            Log in with your email and password.{' '}
          </span>
        </div>
        <form onSubmit={this.handleClick}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="E-mail"
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="button-container">
            <ButtonInput type="Submit" isSubmit onClick={this.handleClick}>
              SUBMIT
            </ButtonInput>
            <ButtonInput
              type="button"
              isGoogleSignIn
              onClick={SignInWithGoogle}
            >
              SIGN IN WITH GOOGLE
            </ButtonInput>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
