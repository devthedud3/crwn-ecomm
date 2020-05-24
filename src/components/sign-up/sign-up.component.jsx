import React from 'react';

import FormInput from '../form/form-input.component';
import ButtonInput from '../button/button.component';
import { auth, createUser } from '../../firebase/firebase.utils';
import './sign-up.style.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleClick = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('passwords do no match!');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUser(user, { displayName });
    } catch (error) {
      console.error(error);
    }
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  handleChange = async e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signup">
        <div className="headliner">
          <h1 className="title"> Don't have an account?</h1>
          <span className="subtitle">
            {' '}
            Sign up with an email account and password.
          </span>
        </div>
        <form onClick={this.handleClick}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            handleChange={this.handleChange}
            value={this.state.displayName}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="E-mail"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            required
          />
          <ButtonInput
            className="button"
            type="submit"
            onClick={this.handleClick}
          >
            {' '}
            SIGN UP{' '}
          </ButtonInput>
        </form>
      </div>
    );
  }
}

export default SignUp;
