import React from 'react';
import {
  CheckoutContainer,
  HeaderComponent,
  TitleContainer,
  TotalContainer,
  DisclaimerContainer,
  InfoContainer
} from './checkout.style';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItem, cartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe/stripe.component';

const titles = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const Checkout = ({ cart, cartTotal }) => (
  <CheckoutContainer>
    <HeaderComponent>
      {titles.map(title => (
        <TitleContainer>
          <span>{title}</span>
        </TitleContainer>
      ))}
    </HeaderComponent>
    {cart.map(product => (
      <CheckoutItem key={product.id} cart={product} />
    ))}
    <TotalContainer>Total: ${cartTotal}</TotalContainer>
    <DisclaimerContainer>
      <h3> *USE THIS NUMBER TO TEST STRIPE PAYMENT FUNCTIONALITY*</h3>
      <InfoContainer>
        5555 5555 5555 4444 <br />
        EXP: 01/2023 ~~ CVC: 123
      </InfoContainer>
    </DisclaimerContainer>
    <StripeCheckoutButton price={cartTotal} cart={cart} />
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cart: selectCartItem,
  cartTotal: cartTotal
});

export default connect(mapStateToProps)(Checkout);
