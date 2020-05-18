import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import HeaderDiv from './components/header/header.component';
import SignPage from './pages/signup-in/signup-in.component';
import { auth, createUser } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async activeUser => {
      if (activeUser) {
        const userRef = await createUser(activeUser);
        userRef.onSnapshot(snap => {
          this.setState({
            currentUser: {
              id: snap.id,
              ...snap.data()
            }
          });
        });
      }
      this.setState({ currentUser: activeUser });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderDiv currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path="/header" component={Shop}></Route>
          <Route exact path="/sign" component={SignPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
