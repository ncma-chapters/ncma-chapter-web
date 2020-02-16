// Dependencies.
import React from 'react';
import filter from 'lodash/filter';
import get from 'lodash/get';
import map from 'lodash/map';
// Relative imports.
import BannerImage from '../../primitives/BannerImage';
import CallToActionButton from '../../primitives/CallToActionButton';
import Column from '../../primitives/Column';
import H2 from '../../primitives/H2';
import Hero from '../../primitives/Hero';
import Layout from '../../global/Layout';
import Section from '../../primitives/Section';
import Text from '../../primitives/Text';
import config from '../../config';
import { Bar, BarTitle, BarSubtitle, Event, StyledDate, Title } from './styles';

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
        <BannerImage url={image}>
          <Bar>
            <BarTitle>{title}</BarTitle>
            <BarSubtitle>{startsAt.format('MMMM D, YYYY')}</BarSubtitle>
          </Bar>
        </BannerImage>
        <Text largeScreenStyles={{ marginTop: '50px' }}>{description}</Text>
        <CallToActionButton to="/membership">REGISTER NOW</CallToActionButton>
      </Section>

      <Section largeScreenStyles={{ margin: '0 0 100px' }}>
        {map(otherEvents, (event) => {
          // Derive event properties.
          const id = get(event, 'id');
          const title = get(event, 'title');
          const description = get(event, 'description');
          const startsAt = get(event, 'startsAt');

          return (
            <Event key={id} to={`/events/${id}`}>
              <StyledDate>{startsAt.format('MMM D')}</StyledDate>
              <Column>
                <Title>{title}</Title>
                <Text largeScreenStyles={{ margin: '0 0 25px' }}>{description}</Text>
              </Column>
            </Event>
          );
        })}
      </Section>
    </Layout>
  );
};

export default Events;
