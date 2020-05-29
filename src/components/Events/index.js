// Node modules.
import React from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/filter';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import moment from 'moment';
// Relative imports.
import BannerImage from '../../primitives/BannerImage';
import CallToActionLink from '../../primitives/CallToActionLink';
import Column from '../../primitives/Column';
import H2 from '../../primitives/H2';
import Hero from '../../primitives/Hero';
import Section from '../../primitives/Section';
import Text from '../../primitives/Text';
import config from '../../config';
import eventsMainImage from '../../assets/pictures/events_main_image.png';
import { Bar, BarTitle, BarSubtitle, Event, StyledDate, StyledLayout, Title } from './styles';

const Events = ({ data }) => {
  // Derive events.
  const events = get(data, 'allEvents.nodes');
  const filteredEvents = filter(events, (event) => !event.fake);

  // Derive config properties.
  const content = get(config, 'content');
  const heroImage = get(content, 'events.heroImage');
  const section1Header = get(content, 'events.section1Header');

  // Derive the first event properties.
  const firstEvent = get(filteredEvents, '[0]');
  const id = get(firstEvent, 'id');
  const name = get(firstEvent, 'name');
  const description = get(firstEvent, 'description');
  const image = get(firstEvent, 'imageURL', eventsMainImage);
  const startingAt = moment(get(firstEvent, 'startingAt'));

  // Derive all other events.
  const otherEvents = filter(filteredEvents, (event, index) => index !== 0);

  return (
    <StyledLayout>
      {/* Hero Image */}
      <Hero url={heroImage} />

      {isEmpty(filteredEvents) && (
        <Section className="no-events">
          <H2>{section1Header}</H2>
          <Text>
            No events here! <a href="mailto:info@ncmamonmouth.org">Contact us if you think this is a mistake.</a>
          </Text>
        </Section>
      )}

      {/* First Event */}
      {firstEvent && (
        <Section
          largeScreenStyles={isEmpty(otherEvents) && { margin: '0 0 100px' }}
          smallScreenStyles={isEmpty(otherEvents) && { margin: '0 0 100px' }}
        >
          <H2>{section1Header}</H2>
          <a className="banner-image-link" href={`/events/${id}`}>
            <BannerImage url={image}>
              <Bar>
                <BarTitle>{name}</BarTitle>
                <BarSubtitle>{startingAt.format('MMMM D, YYYY')}</BarSubtitle>
              </Bar>
            </BannerImage>
          </a>
          <Text largeScreenStyles={{ marginTop: '50px' }} smallScreenStyles={{ marginTop: '50px' }}>
            {description}
          </Text>
          <CallToActionLink smallScreenStyles={{ marginTop: '40px' }} to={`/events/${id}`}>
            REGISTER NOW
          </CallToActionLink>
        </Section>
      )}

      {/* Other Events */}
      {!isEmpty(otherEvents) && (
        <Section largeScreenStyles={{ margin: '0 0 100px' }}>
          {map(otherEvents, (event) => {
            // Derive event properties.
            const id = get(event, 'id');
            const name = get(event, 'name');
            const description = get(event, 'description');
            const startingAt = moment(get(event, 'startingAt'));

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
    </StyledLayout>
  );
};

Events.propTypes = {
  data: PropTypes.shape({
    allEvents: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          capacity: PropTypes.number.isRequired,
          description: PropTypes.string.isRequired,
          fake: PropTypes.bool.isRequired,
          startingAt: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Events;
