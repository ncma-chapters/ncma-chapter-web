// Dependencies.
import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
// Relative imports.
import config from '../../config';
import Layout from '../../global/Layout';
import Banner from '../../primitives/Banner';
import CallToActionButton from '../../primitives/CallToActionButton';
import Column from '../../primitives/Column';
import H2 from '../../primitives/H2';
import H3 from '../../primitives/H3';
import Hero from '../../primitives/Hero';
import Image from '../../primitives/Image';
import Line from '../../primitives/Line';
import Row from '../../primitives/Row';
import Section from '../../primitives/Section';
import Text from '../../primitives/Text';
import Video from '../../primitives/Video';
import { Box, MeetTeamMembersLink, Role, TeamMember, TeamMemberImage, TeamMembers } from './styles';

const Home = () => {
  // Derive config properties.
  const teamMembers = get(config, 'teamMembers');
  const content = get(config, 'content');
  const callToAction = get(config, 'callToAction');

  // Derive callToAction properties.
  const label = get(callToAction, 'label');
  const label2 = get(callToAction, 'label2', label);
  const href = get(callToAction, 'href');

  // Derive content properties.
  const heroImage = get(content, 'home.heroImage');
  const section1Header = get(content, 'home.section1Header');
  const section1Text1 = get(content, 'home.section1Text1');
  const section1VideoSrc = get(content, 'home.section1VideoSrc');
  const bannerHeader = get(content, 'home.bannerHeader');
  const bannerText = get(content, 'home.bannerText');
  const section2Header = get(content, 'home.section2Header');
  const section2SubHeader1 = get(content, 'home.section2SubHeader1');
  const section2SubHeader1Text1 = get(content, 'home.section2SubHeader1Text1');
  const section2SubHeader1ImageAlt = get(content, 'home.section2SubHeader1ImageAlt');
  const section2SubHeader1ImageSrc = get(content, 'home.section2SubHeader1ImageSrc');
  const section2SubHeader2ImageAlt = get(content, 'home.section2SubHeader2ImageAlt');
  const section2SubHeader2ImageSrc = get(content, 'home.section2SubHeader2ImageSrc');
  const section2SubHeader2 = get(content, 'home.section2SubHeader2');
  const section2SubHeader2Text1 = get(content, 'home.section2SubHeader2Text1');
  const section2SubHeader3 = get(content, 'home.section2SubHeader3');
  const section3Header = get(content, 'home.section3Header');
  const section3SubHeader1ImageAlt = get(content, 'home.section3SubHeader1ImageAlt');
  const section3SubHeader1ImageSrc = get(content, 'home.section3SubHeader1ImageSrc');
  const section3SubHeader1 = get(content, 'home.section3SubHeader1');
  const section3SubHeader1Text1 = get(content, 'home.section3SubHeader1Text1');

  return (
    <Layout>
      <Hero url={heroImage} />

      <Section>
        <H2>{section1Header}</H2>
        <Text style={{ textAlign: 'center' }}>{section1Text1}</Text>
        <Video
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          frameborder="0"
          src={section1VideoSrc}
        />
      </Section>

      <Banner>
        <Column>
          <H3>{bannerHeader}</H3>
          <Line />
          <Text>{bannerText}</Text>
        </Column>

        <Column style={{ alignItems: 'center' }}>
          <CallToActionButton to={href}>{label}</CallToActionButton>
        </Column>
      </Banner>

      <Section>
        <H2>{section2Header}</H2>

        <Row>
          <Column>
            <H3>{section2SubHeader1}</H3>
            <Line />
            <Text>{section2SubHeader1Text1}</Text>
          </Column>

          <Image alt={section2SubHeader1ImageAlt} src={section2SubHeader1ImageSrc} />
        </Row>

        <Row>
          <Image alt={section2SubHeader2ImageAlt} src={section2SubHeader2ImageSrc} />

          <Column>
            <H3>{section2SubHeader2}</H3>
            <Line />
            <Text>{section2SubHeader2Text1}</Text>
          </Column>
        </Row>

        <Row>
          <Column>
            <H3>{section2SubHeader3}</H3>
            <Line style={{ maxWidth: '430px' }} />
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

            <MeetTeamMembersLink to="/about">Get to know the officers.</MeetTeamMembersLink>
          </Column>
        </Row>
      </Section>

      <Section>
        <H2>{section3Header}</H2>
        <Row>
          <Image alt={section3SubHeader1ImageAlt} src={section3SubHeader1ImageSrc} />

          <Column>
            <H3 style={{ marginLeft: '-15px' }}>{section3SubHeader1}</H3>
            <Box>
              <Text style={{ marginBottom: '0' }}>{section3SubHeader1Text1}</Text>
              <CallToActionButton to={href} style={{ marginTop: '40px' }}>
                {label2}
              </CallToActionButton>
            </Box>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
};

export default Home;
