// Node modules.
import React from 'react';
import get from 'lodash/get';
import { Link } from 'gatsby';
// Relative imports.
import config from '../../config';
import H2 from '../../primitives/H2';
import Hero from '../../primitives/Hero';
import Section from '../../primitives/Section';
import { StyledLayout } from './styles';

const NotFound = () => {
  const heroImage = get(config, 'content.about.heroImage');

  return (
    <StyledLayout>
      <Hero url={heroImage} />

      <Section>
        <H2>THE PAGE YOU&apos;RE LOOKING FOR DOESN&apos;T EXIST</H2>
        <Link to="/events">EVENTS</Link>
      </Section>
    </StyledLayout>
  );
};

export default NotFound;
