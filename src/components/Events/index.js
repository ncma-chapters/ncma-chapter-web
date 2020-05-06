// Node modules..
import React, { Component } from 'react';
import filter from 'lodash/filter';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import moment from 'moment';
// Relative imports.
import BannerImage from '../../primitives/BannerImage';
import CallToActionButton from '../../primitives/CallToActionButton';
import Column from '../../primitives/Column';
import H2 from '../../primitives/H2';
import Hero from '../../primitives/Hero';
import Layout from '../../global/Layout';
import Section from '../../primitives/Section';
import Spinner from '../../primitives/Spinner';
import Text from '../../primitives/Text';
import config from '../../config';
import request from '../../utils/request';
import { Bar, BarTitle, BarSubtitle, Event, StyledDate, Title } from './styles';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      events: [],
    };
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    // Show fetching state.
    this.setState({ fetching: true });

    request(`${config.API_BASE_URL}/events`)
      .then((response) => {
        this.setState({ fetching: false, events: get(response, 'data', []) });
      })
      .catch((error) => {
        console.warn('Unable to fetch events:', error);
        this.setState({ fetching: false });
      });
  };

  render() {
    const { fetching, events } = this.state;

    // Derive config properties.
    const content = get(config, 'content');

    // Derive content properties.
    const heroImage = get(content, 'events.heroImage');
    const section1Header = get(content, 'events.section1Header');

    // Derive the first event and the other events.
    const firstEvent = get(events, '[0]');
    const otherEvents = filter(events, (event, index) => index !== 0);

    // Derive first event properties.
    const id = get(firstEvent, 'id');
    const name = get(firstEvent, 'attributes.name');
    const description = get(firstEvent, 'attributes.description');
    const image = get(firstEvent, 'attributes.image');
    const startingAt = moment(get(firstEvent, 'attributes.startingAt'));

    return (
      <Layout>
        {/* Hero Image */}
        <Hero url={heroImage} />

        {/* Spinner */}
        {fetching && <Spinner />}

        {/* First Event */}
        {firstEvent && (
          <Section largeScreenStyles={isEmpty(otherEvents) && { margin: '0 0 100px' }}>
            <H2>{section1Header}</H2>
            <BannerImage url={image}>
              <Bar>
                <BarTitle>{name}</BarTitle>
                <BarSubtitle>{startingAt.format('MMMM D, YYYY')}</BarSubtitle>
              </Bar>
            </BannerImage>
            <Text largeScreenStyles={{ marginTop: '50px' }}>{description}</Text>
            <CallToActionButton to={`/events/${id}`}>REGISTER NOW</CallToActionButton>
          </Section>
        )}

        {/* Other Events */}
        {!isEmpty(otherEvents) && (
          <Section largeScreenStyles={{ margin: '0 0 100px' }}>
            {map(otherEvents, (event) => {
              // Derive event properties.
              const id = get(event, 'id');
              const name = get(event, 'attributes.name');
              const description = get(event, 'attributes.description');
              const startingAt = moment(get(event, 'attributes.startingAt'));

              return (
                <Event key={id} to={`/events/${id}`}>
                  <StyledDate>{startingAt.format('MMM D')}</StyledDate>
                  <Column>
                    <Title>{name}</Title>
                    <Text largeScreenStyles={{ margin: '0 0 25px' }}>{description}</Text>
                  </Column>
                </Event>
              );
            })}
          </Section>
        )}
      </Layout>
    );
  }
}

export default Events;
