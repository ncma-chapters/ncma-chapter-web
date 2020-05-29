// Node modules.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/filter';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import join from 'lodash/join';
import map from 'lodash/map';
import moment from 'moment';
import { Link, graphql } from 'gatsby';
// Relative imports.
import AttendeeList from '../../components/AttendeeList';
import Column from '../../primitives/Column';
import H2 from '../../primitives/H2';
import H3 from '../../primitives/H3';
import Hero from '../../primitives/Hero';
import Image from '../../primitives/Image';
import Line from '../../primitives/Line';
import RegisterPaidEventForm from '../../components/RegisterPaidEventForm';
import Row from '../../primitives/Row';
import Section from '../../primitives/Section';
import Spinner from '../../primitives/Spinner';
import Text from '../../primitives/Text';
import config from '../../config';
import eventDetailImage from '../../assets/pictures/events_details.png';
import { StyledLayout } from './styles';
import { createEventRegistration } from './api';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      email: '',
      error: '',
      firstName: '',
      lastName: '',
      registering: false,
      selectedTicketClass: get(props, 'data.allTicketClasses.nodes[0]', {}),
      success: false,
      title: '',
    };
  }

  onStateChange = (key) => (event) => {
    this.setState({ [key]: event.target.value });
  };

  onTicketClassClick = (selectedTicketClass) => () => {
    this.setState({ selectedTicketClass });
  };

  isCheckoutDisabled = () => {
    const { email, firstName, lastName, selectedTicketClass, success } = this.state;

    // Escape early if no ticket class has been selected.
    if (isEmpty(selectedTicketClass)) {
      return true;
    }

    // Escape early if they are missing required fields.
    if (!email || !firstName || !lastName) {
      return true;
    }

    // Escape early if they already registered successfully.
    if (success) {
      return true;
    }

    return false;
  };

  onCheckoutClick = async () => {
    const { company, email, firstName, lastName, selectedTicketClass, title } = this.state;

    // Escape early if checkout is disabled.
    if (this.isCheckoutDisabled()) {
      return;
    }

    // Show spinner.
    this.setState({ registering: true });

    try {
      await createEventRegistration({
        company,
        email,
        firstName,
        lastName,
        title,
        ticketClassID: get(selectedTicketClass, 'id'),
      });
      this.setState({ error: '', registering: false, success: true });
    } catch (error) {
      console.error('Unable to create event registration:', error);
      this.setState({ error: error.message, registering: false });
    }
  };

  deriveSubmitButtonLabel = () => {
    const { success, selectedTicketClass } = this.state;

    if (success) {
      return 'REGISTERED';
    }

    const isPaidEvent = get(selectedTicketClass, 'price.value') > 0;
    if (isPaidEvent) {
      return 'PLACE YOUR ORDER';
    }

    return 'REGISTER';
  };

  render() {
    const { deriveSubmitButtonLabel, onTicketClassClick, onStateChange, onCheckoutClick, isCheckoutDisabled } = this;
    const { data } = this.props;
    const { registering, error, success, selectedTicketClass, firstName, lastName, email, company, title } = this.state;

    // Derive config properties.
    const content = get(config, 'content');
    const heroImage = get(content, 'event.heroImage');

    // Derive event properties.
    const event = get(data, 'events');
    const id = get(event, 'id');
    const name = get(event, 'name');
    const shortDescription = get(event, 'shortDescription', 'Getting you in the know about 2020 best practices');
    const description = get(event, 'description');
    const imageURL = get(event, 'imageURL', eventDetailImage);
    const startingAt = moment(get(event, 'startingAt', new Date()));

    // Derive venue properties.
    const venue = get(data, 'venues');
    const city = get(venue, 'address.city');
    const state = get(venue, 'address.state');
    const street1 = get(venue, 'address.street');
    const street2 = get(venue, 'address.street2');
    const zip = get(venue, 'address.zip');
    const venueAddress = join(
      filter([street1, street2, city, state, zip], (item) => !!item),
      ', ',
    );

    // Derive ticket class properties.
    const ticketClasses = get(data, 'allTicketClasses.nodes');

    // Derive other vars.
    const companyAndTitle = join(
      filter([company, title], (item) => !!item),
      ', ',
    );
    const fullName = join(
      filter([firstName, lastName], (item) => !!item),
      ' ',
    );
    const isPaidEvent = get(selectedTicketClass, 'price.value') > 0;

    return (
      <StyledLayout>
        <Hero url={heroImage} />

        <Section className="event-details">
          <H2>EVENT DETAILS</H2>
          <Row className="row">
            <Column className="column">
              <H3>{name}</H3>
              <Text className="short-description">{shortDescription}</Text>
              <Text className="starting-date">{startingAt.format('MMM D, YYYY [at] h:mm a')}</Text>
              <a
                href={`https://google.com/maps/search/${encodeURIComponent(venueAddress)}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {venueAddress}
              </a>
            </Column>
            <Image alt="event" src={imageURL} />
          </Row>
        </Section>

        {description && <Section className="description" dangerouslySetInnerHTML={{ __html: description }} />}

        <Line className="line" />

        <Section className="event-register">
          <H3>REGISTER FOR EVENT</H3>

          {/* Ticket Type */}
          <h4>Select a ticket option:</h4>
          <Row className="row">
            {map(ticketClasses, (ticketClass) => (
              <label htmlFor={get(ticketClass, 'id')} key={get(ticketClass, 'id')}>
                <input
                  checked={get(ticketClass, 'id') === get(selectedTicketClass, 'id')}
                  id={get(ticketClass, 'id')}
                  name={get(ticketClass, 'name')}
                  onChange={onTicketClassClick(ticketClass)}
                  type="radio"
                />
                {get(ticketClass, 'price.display', '$0.00')} ({get(ticketClass, 'name')})
              </label>
            ))}
          </Row>

          {/* Attendee Info */}
          <h4>
            Attendee Information{' '}
            <span className="required-def">
              Required fields <span className="required">*</span>
            </span>
          </h4>
          <Row className="row attendee-info">
            <label htmlFor="firstName">
              <span className="label">
                First name <span className="required">*</span>
              </span>
              <input
                autoComplete="given-name"
                id="firstName"
                maxLength="50"
                onChange={onStateChange('firstName')}
                required
                type="text"
                value={firstName}
              />
            </label>

            <label htmlFor="lastName">
              <span className="label">
                Last name <span className="required">*</span>
              </span>
              <input
                autoComplete="family-name"
                id="lastName"
                maxLength="50"
                onChange={onStateChange('lastName')}
                required
                type="text"
                value={lastName}
              />
            </label>

            <label htmlFor="email">
              <span className="label">
                Email address <span className="required">*</span>
              </span>
              <input
                autoComplete="email"
                id="email"
                maxLength="100"
                onChange={onStateChange('email')}
                required
                type="email"
                value={email}
              />
            </label>

            <label htmlFor="company">
              Company
              <input id="company" maxLength="100" onChange={onStateChange('company')} type="text" value={company} />
            </label>

            <label htmlFor="title">
              Title
              <input id="title" maxLength="100" onChange={onStateChange('title')} type="text" value={title} />
            </label>
          </Row>

          {/* Summary */}
          <h4>Summary</h4>
          <p className="summary-header">Ticket option:</p>
          <p className="summary-value">
            {get(selectedTicketClass, 'price.display', '$0.00')} ({get(selectedTicketClass, 'name')})
          </p>

          {/* Confirm: Attendee Info */}
          <p className="summary-header">Attendee Information</p>
          <p className="summary-value">{fullName || 'Unknown name'}</p>
          <p className="summary-value">{email || 'Unknown email'}</p>
          {companyAndTitle && <p className="summary-value">{companyAndTitle}</p>}

          {/* Payment Method */}
          {isPaidEvent ? (
            <>
              <p className="summary-header">Payment Method</p>
              <RegisterPaidEventForm
                company={company}
                disabled={isCheckoutDisabled()}
                email={email}
                firstName={firstName}
                lastName={lastName}
                onError={(error) => this.setState({ error, registering: false })}
                onSubmit={() => this.setState({ registering: true })}
                onSuccess={() => this.setState({ error: '', success: true, registering: false })}
                showSpinner={registering}
                ticketClass={selectedTicketClass}
                title={title}
              />
            </>
          ) : (
            <button disabled={isCheckoutDisabled()} onClick={onCheckoutClick} type="button">
              {registering ? <Spinner /> : deriveSubmitButtonLabel()}
            </button>
          )}

          {/* Error Message */}
          <p className="error">{error}</p>

          {/* Success Message */}
          <p className="success">{success ? 'You registered successfully!' : ''}</p>
        </Section>

        <AttendeeList eventID={id} />

        <div className="events-banner-wrapper">
          <Row className="events-banner">
            <div className="column">
              <h2>CHECK OUT OUR OTHER EVENTS.</h2>
              <p>
                We have events happening all year long! Plan your schedule now and improve your skills and knowledge.
              </p>
            </div>
            <div className="column">
              <Link to="/events">VIEW EVENTS</Link>
            </div>
          </Row>
        </div>
      </StyledLayout>
    );
  }
}

Event.propTypes = {
  data: PropTypes.shape({
    events: PropTypes.shape({
      id: PropTypes.string.isRequired,
      capacity: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      fake: PropTypes.bool.isRequired,
      startingAt: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    allTicketClasses: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            display: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
          }).isRequired,
          id: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    venues: PropTypes.shape({
      address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        street2: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
      }).isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query EventQuery($eventID: String) {
    events(id: { eq: $eventID }) {
      id
      fake
      name
      description
      capacity
      venueId
      startingAt
    }
    venues(relationships: { events: { data: { elemMatch: { id: { eq: $eventID } } } } }) {
      address {
        city
        state
        street
        street2
        zip
      }
      id
    }
    allTicketClasses(filter: { relationships: { event: { data: { id: { eq: "1" } } } } }) {
      nodes {
        id
        name
        price {
          currency
          display
          value
        }
      }
    }
  }
`;

export default Event;
