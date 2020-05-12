import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form/form-input.component';
import ButtonInput from '../button/button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <h2 className="title"> I already have an account </h2>
        <h4 className="subtitle"> Log in with your email and password. </h4>

        <form onSubmit={this.handleClick}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="button-container">
            <ButtonInput type="Submit" onClick={e => console.log(e)}>
              SUBMIT
            </ButtonInput>
            <ButtonInput id="googauth" onClick={SignInWithGoogle}>
              SIGN IN WITH GOOGLE
            </ButtonInput>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
