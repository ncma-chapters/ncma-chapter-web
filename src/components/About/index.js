// Dependencies.
import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
// Relative imports.
import config from '../../config';
import Layout from '../../global/Layout';
import H2 from '../../primitives/H2';
import Hero from '../../primitives/Hero';
import Image from '../../primitives/Image';
import Section from '../../primitives/Section';
import Text from '../../primitives/Text';
import { Role, TeamMember, TeamMemberImage, TeamMembers } from './styles';

const About = () => {
  // Derive config properties.
  const teamMembers = get(config, 'teamMembers');
  const content = get(config, 'content');

  // Derive content properties.
  const heroImage = get(content, 'about.heroImage');
  const section1Header = get(content, 'about.section1Header');
  const section1Text1 = get(content, 'about.section1Text1');
  const section1Text2 = get(content, 'about.section1Text2');
  const section2Header = get(content, 'about.section2Header');
  const section2Text1 = get(content, 'about.section2Text1');
  const section2Text2 = get(content, 'about.section2Text2');
  const section2Text3 = get(content, 'about.section2Text3');
  const section3Header1 = get(content, 'about.section3Header1');
  const section4Header = get(content, 'about.section4Header');
  const section4ImageAlt = get(content, 'about.section4ImageAlt');
  const section4ImageSrc = get(content, 'about.section4ImageSrc');
  const section4Text1 = get(content, 'about.section4Text1');
  const section4Text2 = get(content, 'about.section4Text2');

  return (
    <Layout>
      <Hero url={heroImage} />

      <Section>
        <H2>{section1Header}</H2>
        <Text>{section1Text1}</Text>
        <Text>{section1Text2}</Text>
      </Section>

      <Section>
        <H2>{section2Header}</H2>
        <Text>{section2Text1}</Text>
        <Text>{section2Text2}</Text>
        <Text>{section2Text3}</Text>
      </Section>

      <Section>
        <H2>{section3Header1}</H2>
        <TeamMembers>
          {map(teamMembers, (member) => {
            // Derive member properties.
            const firstName = get(member, 'firstName');
            const lastName = get(member, 'lastName');
            const id = get(member, 'id');
            const image = get(member, 'image');
            const role = get(member, 'role');

            return (
              <TeamMember key={id}>
                <Role>{role}</Role>
                <TeamMemberImage alt={`${firstName} ${lastName}`} src={image} />
                <Text>{`${firstName} ${lastName}`}</Text>
              </TeamMember>
            );
          })}
        </TeamMembers>
      </Section>

      <Section>
        <H2>{section4Header}</H2>
        <Text>{section4Text1}</Text>
        <Text>{section4Text2}</Text>
        <Image alt={section4ImageAlt} src={section4ImageSrc} />
      </Section>
    </Layout>
  );
};

export default About;
