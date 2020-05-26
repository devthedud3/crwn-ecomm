import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const pk = 'pk_test_UZSCelkuNNZ9eVKIeVjLY3cd00AV4cJk5R';

  const onToken = token => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN ECOMM"
      image="https://svgshare.com/i/CUz.svg"
      allowRememberMe
      billingAddress
      shippingAddress
      amount={stripePrice}
      description={`Your total is ${price}`}
      panelLabel="Test"
      token={onToken}
      stripeKey={pk}
    />
  );
};

export default StripeCheckoutButton;
