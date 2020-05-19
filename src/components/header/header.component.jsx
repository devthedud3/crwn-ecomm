import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/original.svg';

const HeaderDiv = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP{' '}
      </Link>
      <Link className="option" to="/about">
        ABOUT{' '}
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {' '}
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign">
          LOGIN{' '}
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(HeaderDiv);
