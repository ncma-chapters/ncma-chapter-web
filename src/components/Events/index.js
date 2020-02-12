// Dependencies.
import React from 'react';
import filter from 'lodash/filter';
import get from 'lodash/get';
import map from 'lodash/map';
// Relative imports.
import config from '../../config';
import CallToActionButton from '../../primitives/CallToActionButton';
import Column from '../../primitives/Column';
import H2 from '../../primitives/H2';
import Hero from '../../primitives/Hero';
import Image from '../../primitives/Image';
import Layout from '../../global/Layout';
import Section from '../../primitives/Section';
import Text from '../../primitives/Text';
import { Event, StyledDate, Title, Description, StyledLink } from './styles';

const Events = () => {
  // Derive config properties.
  const content = get(config, 'content');
  const events = get(config, 'events');

  // Derive content properties.
  const heroImage = get(content, 'events.heroImage');
  const section1Header = get(content, 'events.section1Header');

  // Derive the first event and the other events.
  const firstEvent = get(events, '[0]');
  const otherEvents = filter(events, (event) => event.id !== 1);

  // Derive first event properties.
  const title = get(firstEvent, 'title');
  const description = get(firstEvent, 'description');
  const image = get(firstEvent, 'image');
  const startsAt = get(firstEvent, 'startsAt');

  return (
    <Layout>
      <Hero url={heroImage} />

      <Section>
        <H2>{section1Header}</H2>
        <Image alt={title} src={image} />
        <Text>
          {title}: {startsAt.format('MMMM D, YYYY')}
        </Text>
        <Text>{description}</Text>
        <CallToActionButton to="/membership">REGISTER NOW</CallToActionButton>
      </Section>

      <Section style={{ marginBottom: '100px' }}>
        {map(otherEvents, (event) => {
          // Derive event properties.
          const id = get(event, 'id');
          const title = get(event, 'title');
          const description = get(event, 'description');
          const startsAt = get(event, 'startsAt');

          return (
            <Event key={id}>
              <StyledDate>{startsAt.format('MMM D')}</StyledDate>
              <Column>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <StyledLink to={`/events/${id}`}>Learn More</StyledLink>
              </Column>
            </Event>
          );
        })}
      </Section>
    </Layout>
  );
};

export default Events;
