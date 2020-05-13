// Node modules.
import React from 'react';
import get from 'lodash/get';
// import map from 'lodash/map';
// Relative imports.
import config from '../../config';
import Layout from '../../global/Layout';
import H2 from '../../primitives/H2';
import Hero from '../../primitives/Hero';
import Image from '../../primitives/Image';
import Section from '../../primitives/Section';
// import TeamMember from '../../primitives/TeamMember';
import Text from '../../primitives/Text';
// import { TeamMembers } from './styles';

const About = () => {
  // Derive config properties.
  // const teamMembers = get(config, 'teamMembers');
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
  const section2Text4 = get(content, 'about.section2Text4');
  const section2Text5 = get(content, 'about.section2Text5');
  const section2ImageAlt = get(content, 'about.section2ImageAlt');
  const section2ImageSrc = get(content, 'about.section2ImageSrc');
  // const section3Header = get(content, 'about.section3Header');
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
        <Text largeScreenStyles={{ marginBottom: '0' }}>{section1Text2}</Text>
      </Section>

      <Section>
        <H2>{section2Header}</H2>
        <Text>{section2Text1}</Text>
        <Text>{section2Text2}</Text>
        <Text>{section2Text3}</Text>
        <Text>{section2Text4}</Text>
        <Text>{section2Text5}</Text>
        <Image
          alt={section2ImageAlt}
          largeScreenStyles={{ marginTop: '40px', maxHeight: '300px' }}
          smallScreenStyles={{ maxHeight: '300px' }}
          src={section2ImageSrc}
        />
      </Section>

      {/* <Section>
        <H2>{section3Header}</H2>
        <TeamMembers>
          {map(teamMembers, (teamMember) => (
            <TeamMember key={get(teamMember, 'id')} teamMember={teamMember} />
          ))}
        </TeamMembers>
      </Section> */}

      <Section>
        <H2>{section4Header}</H2>
        <Text>{section4Text1}</Text>
        <Text>{section4Text2}</Text>
        <Image
          alt={section4ImageAlt}
          src={section4ImageSrc}
          largeScreenStyles={{ margin: '50px 0 100px' }}
          smallScreenStyles={{ margin: '40px 0' }}
        />
      </Section>
    </Layout>
  );
};

export default About;
