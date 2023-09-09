import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import HeaderDiv from "./components/header/header.component";
import SignPage from "./pages/signup-in/signup-in.component";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Checkout from "./pages/checkout/checkout.component";

import { activeUser } from "./redux/user/user.selector";
import { auth, createUser } from "./firebase/firebase.utils";
import { setActiveUser } from "./redux/user/user.action";

const App = () => {
  const currentUser = useSelector(activeUser);
  const dispatch = useDispatch();
  let unsubscribeFromAuth = null;

  useEffect(() => {
    const handleAuthChange = async (user) => {
      if (user) {
        const userRef = await createUser(user);
        userRef.onSnapshot((snap) => {
          dispatch(
            setActiveUser({
              id: snap.id,
              ...snap.data()
            })
          );
        });
      }
      dispatch(setActiveUser(user));
    };

    unsubscribeFromAuth = auth.onAuthStateChanged(handleAuthChange);

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <HeaderDiv />
      <Routes>
        <Route
          path="/sign"
          element={currentUser != null ? <Navigate to="/" /> : <SignPage />}
        />

        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />}>
          <Route path=":categoryId" element={<Shop />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/header" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default App;
