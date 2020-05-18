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

  handleChange = e => {
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
            handleChange={this.handleChange}
            name="displayName"
            label="Display Name"
            value={this.state.displayName}
            required
          />
          <FormInput
            type="email"
            handleChange={this.handleChange}
            name="email"
            label="E-mail"
            value={this.state.email}
            required
          />
          <FormInput
            type="password"
            handleChange={this.handleChange}
            name="password"
            label="Password"
            value={this.state.password}
            required
          />

          <FormInput
            type="password"
            handleChange={this.handleChange}
            name="confirmPassword"
            label="Confirm Password"
            value={this.state.confirmPassword}
            required
          />
          <ButtonInput type="submit" onClick={this.handleClick}>
            {' '}
            SIGN UP{' '}
          </ButtonInput>
        </form>
      </div>
    );
  }
}

export default SignUp;
