// Node modules.
import React from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/filter';
import get from 'lodash/get';
import join from 'lodash/join';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { Link } from 'gatsby';
import { loadStripe } from '@stripe/stripe-js';
// Relative imports.
import Spinner from '../../primitives/Spinner';
import { createEventRegistration } from '../../templates/Event/api';

// Make sure to call `loadStripe` outside of this component’s render to avoid
// recreating the `Stripe` object on every render.
// Not making stripe publishable key an env var due to recommendation in docs: https://stripe.com/docs/keys
const stripePromise = loadStripe('pk_test_sJWViDuLfe5OXRunBewQVjyE00IFiXPV7i');

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#282828',
      fontSmoothing: 'antialiased',
      fontSize: '1.2rem',
      fontWeight: '300',
      '::placeholder': {
        color: '#999999',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const RegisterPaidEventForm = ({
  company,
  disabled,
  email,
  firstName,
  lastName,
  onError,
  onSubmit,
  onSuccess,
  showSpinner,
  ticketClass,
  title,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make sure to disable form submission until Stripe.js has loaded.
    if (disabled || !stripe || !elements || !email || !firstName || !lastName || !ticketClass) {
      return;
    }

    // Show spinner.
    onSubmit();

    // Attempt to register for event.
    let response;
    try {
      response = await createEventRegistration({
        company,
        email,
        firstName,
        lastName,
        title,
        ticketClassID: get(ticketClass, 'id'),
      });
    } catch (error) {
      onError(error.message);
      return;
    }

    // Derive the secret.
    const clientSecret = get(response, 'meta.clientSecret');

    // Confirm card payment.
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: join(
            filter([firstName, lastName], (i) => !!i),
            ' ',
          ),
          email,
        },
        type: 'card',
      },
      receipt_email: email,
    });

    // Escape early if there was an error with the card payment.
    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      onError(result.error.message);
      return;
    }

    // Escape early if payment intent was unsuccessful.
    if (result.paymentIntent.status !== 'succeeded') {
      onError('Payment intent was not successful');
      return;
    }

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />

      <div className="total">
        <span className="label">TOTAL</span>
        <span className="value">{get(ticketClass, 'price.display')}</span>
      </div>

      <p className="tos">
        By clicking &quot;PLACE YOUR ORDER&quot; you agree to our <Link to="/terms-of-service">terms of service</Link>.
      </p>

      <button disabled={disabled || !stripe || !email || !firstName || !lastName || !ticketClass} type="submit">
        {showSpinner ? <Spinner /> : 'PLACE YOUR ORDER'}
      </button>
    </form>
  );
};

const RegisterPaidEventFormWrapper = (props) => (
  <Elements stripe={stripePromise}>
    {/* eslint-disable-next-line */}
    <RegisterPaidEventForm {...props} />
  </Elements>
);

RegisterPaidEventForm.propTypes = {
  company: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onSubmit: PropTypes.func,
  onSuccess: PropTypes.func,
  showSpinner: PropTypes.bool,
  title: PropTypes.string.isRequired,
  ticketClass: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

RegisterPaidEventForm.defaultProps = {
  onError: () => {},
  onSubmit: () => {},
  onSuccess: () => {},
};

export default RegisterPaidEventFormWrapper;
