import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey =
    "pk_test_51H34tGB3cHo6TONUVAXn3w2V122lD8npzsVgjI4iPRwAbbul86qUg7i3fvTRhzBfvNuf3Yb4MKqHCouoJ9remtTq00PnEhO0Jt";

  const onToken = (token) => {
    console.log(token);
    alert("Payement successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="othmane"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is ${price}$`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeCheckoutButton;
