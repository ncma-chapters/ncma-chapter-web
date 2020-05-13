// Node modules.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import join from 'lodash/join';
import map from 'lodash/map';
import moment from 'moment';
import { graphql } from 'gatsby';
import { loadStripe } from '@stripe/stripe-js';
// Relative imports.
import Button from '../../primitives/Button';
import CallToActionButton from '../../primitives/CallToActionButton';
import Column from '../../primitives/Column';
import H2 from '../../primitives/H2';
import H3 from '../../primitives/H3';
import Hero from '../../primitives/Hero';
import Image from '../../primitives/Image';
import Layout from '../../global/Layout';
import Line from '../../primitives/Line';
import Row from '../../primitives/Row';
import Section from '../../primitives/Section';
import Spinner from '../../primitives/Spinner';
import Text from '../../primitives/Text';
import config from '../../config';
import eventDetailImage from '../../assets/pictures/events_details.png';
import request from '../../utils/request';
import { H4, Field, Speaker } from './styles';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingOut: false,
      company: '',
      email: '',
      error: '',
      firstName: '',
      lastName: '',
      selectedTicketType: {},
      title: '',
    };
  }

  onStateChange = (key) => (event) => {
    this.setState({ [key]: event.target.value });
  };

  fetchCheckoutSession = async () => {
    try {
      const response = await request(`${process.env.API_URL}/`, {
        method: 'POST',
      });
      console.log('response', response);
      return response;
    } catch (error) {
      console.log('Error', error);
      this.setState({ error: error.message });
    }
  };

  onTicketTypeClick = (selectedTicketType) => () => {
    this.setState({ selectedTicketType });
  };

  onStateChange = (key) => (event) => {
    this.setState({ [key]: event.target.value });
  };

  onCheckoutClick = async () => {
    // Update fetchign state.
    this.setState({ checkingOut: true });

    // Call backend to create the Checkout session.
    const { clientSecret, sessionId } = await this.fetchCheckoutSession();

    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await loadStripe(clientSecret);
    const { error } = await stripe.redirectToCheckout({ sessionId });

    // Update state with an error if there is one.
    this.setState({ checkingOut: false, error });
  };

  render() {
    const { onTicketTypeClick, onStateChange, onCheckoutClick } = this;
    const { data } = this.props;
    const { checkingOut, error, selectedTicketType, firstName, lastName, email, company, title } = this.state;

    // Derive config properties.
    const content = get(config, 'content');
    const heroImage = get(content, 'event.heroImage');

    // Derive event properties.
    const event = get(data, 'event');

    const name = get(event, 'name');
    const shortDescription = get(event, 'shortDescription');
    const description = get(event, 'description');
    const venueAddress = get(event, 'venueAddress');
    const imageURL = get(event, 'imageURL', eventDetailImage);
    const ticketTypes = get(event, 'ticketTypes');
    const speakers = get(event, 'speakers');
    const startingAt = moment(get(event, 'startingAt'));

    return (
      <Layout>
        <Hero url={heroImage} />

        <Section>
          <H2 largeScreenStyles={{ marginBottom: '50px' }}>EVENT DETAILS</H2>
          <Row>
            <Column>
              <H3>{name}</H3>
              <Text>{shortDescription}</Text>
              <Text>{startingAt.format('MMM D')}</Text>
              <Text>{venueAddress}</Text>
              <Text>Attendees receive 12 CPEs / CLPs</Text>
            </Column>
            <Image alt="event" src={imageURL} />
          </Row>
        </Section>

        {!isEmpty(speakers) && (
          <Section>
            <H3>SPEAKERS AND GUESTS</H3>
            <Row>
              {map(speakers, (speaker) => {
                // Derive speaker properties.
                const id = get(speaker, 'id');
                const firstName = get(speaker, 'firstName');
                const lastName = get(speaker, 'lastName');
                const imageURL = get(speaker, 'imageURL');
                const fullName = join([firstName, lastName], ' ');

                return (
                  <Speaker key={id}>
                    <img alt={fullName} src={imageURL} />
                    <p>{fullName}</p>
                  </Speaker>
                );
              })}
            </Row>
          </Section>
        )}

        {description && <Section dangerouslySetInnerHTML={{ __html: description }} />}

        <Line />

        <Section>
          <H3>REGISTER FOR EVENT</H3>

          {/* Ticket Type */}
          <H4>Select a ticket option:</H4>
          <Row>
            {map(ticketTypes, (ticketType) => (
              <Button
                key={ticketType.value}
                onClick={onTicketTypeClick(ticketType)}
                selected={ticketType.value === selectedTicketType.value}
                type="button"
              >
                {ticketType.label}
              </Button>
            ))}
          </Row>

          {/* Attendee Info */}
          <H4>Attendee Information</H4>
          <Row>
            <Field label="First name" required onChange={onStateChange('firstName')} value={firstName} />
            <Field label="Last name" required onChange={onStateChange('lastName')} value={lastName} />
            <Field label="Email address" required onChange={onStateChange('email')} value={email} />
            <Field label="Company" onChange={onStateChange('company')} value={company} />
            <Field label="Title" onChange={onStateChange('title')} value={title} />
          </Row>

          {/* Summary */}
          <H4>Summary</H4>
          <p className="font-weight--bold">Ticket option:</p>
          <p>{selectedTicketType.value}</p>

          {/* Confirm: Attendee Info */}
          <p className="font-weight--bold">Attendee Information</p>
          <p>
            {firstName} {lastName}
          </p>
          <p>{email}</p>
          <p>{join([company, title], ', ')}</p>

          {/* Error */}
          {error && <p>{error}</p>}

          <CallToActionButton onClick={onCheckoutClick} type="button">
            {checkingOut ? <Spinner /> : 'Checkout'}
          </CallToActionButton>
        </Section>
      </Layout>
    );
  }
}

Event.propTypes = {
  data: PropTypes.shape({
    event: PropTypes.shape({
      id: PropTypes.string.isRequired,
      capacity: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      startingAt: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query EventQuery($eventID: String) {
    event(id: { eq: $eventID }) {
      id
      name
      description
      capacity
      venueId
      startingAt
    }
  }
`;

export default Event;
