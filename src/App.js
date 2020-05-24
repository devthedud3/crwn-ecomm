import React from 'react';
import './App.css';

import HeaderDiv from './components/header/header.component';
import SignPage from './pages/signup-in/signup-in.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';

import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';
import { activeUser } from './redux/user/user.selector';
import { auth, createUser } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setActiveUser } from './redux/user/user.action';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setActiveUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async activeUser => {
      if (activeUser) {
        const userRef = await createUser(activeUser);
        userRef.onSnapshot(snap => {
          setActiveUser({
            id: snap.id,
            ...snap.data()
          });
        });
      }
      setActiveUser(activeUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderDiv />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route exact path="/header" component={Shop}></Route>
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignPage />
            }
          ></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProp = createStructuredSelector({
  currentUser: activeUser
});

const mapdispatchToProps = dispatch => ({
  setActiveUser: user => dispatch(setActiveUser(user))
});

export default connect(mapStateToProp, mapdispatchToProps)(App);
