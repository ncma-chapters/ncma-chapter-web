// Dependencies.
import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
// Relative imports.
// import CallToAction from 'src/components/CallToAction';
// import HeroPopup from 'src/components/HeroPopup';
import Layout from 'src/global/Layout';
import config from 'src/config';
import {
  Banner,
  Box,
  Column,
  H2,
  H3,
  Hero,
  LearnMoreButton,
  Line,
  MeetTeamMembersLink,
  Name,
  Role,
  Row,
  Section,
  StyledImage,
  TeamMember,
  TeamMemberImage,
  TeamMembers,
  Text,
  Video,
} from './styles';

const Contact = () => {
  // Derive config properties.
  const teamMembers = get(config, 'teamMembers');

  return (
    <Layout>
      <Hero>{/* <HeroPopup /> */}</Hero>

      <Section>
        <H2>WHY NCMA IS THE PLACE FOR CONTRACT MANAGERS</H2>
        <Text>
          NCMA will connect you to an active support network for federal, commercial, and military contract managers. We
          are the world’s leading resource for professionals in the contract management field.
        </Text>
        <Video />
      </Section>

      <Banner>
        <Column>
          <H3>LET&APOS;S DO THIS TOGETHER</H3>
          <Line />
          <Text>
            The National Contract Management Association, Monmouth, NJ chapter serves the needs of contract management
            professionals in central New Jersey.
          </Text>
        </Column>

        {/* <CallToAction /> */}
      </Banner>

      <Section>
        <H2>ABOUT OUR CHAPTER</H2>

        <Row>
          <Column>
            <H3>OUR VISION</H3>
            <Line />
            <Text>
              NCMA Monmouth will lead in defining the standards and the body of knowledge for the contract management
              profession. We will provide advocacy, training, education, and certifications that enable the entry,
              development, and advancement of all contract management professionals in central New Jersey.
            </Text>
          </Column>
          <StyledImage />
        </Row>

        <Row>
          <StyledImage />
          <Column>
            <H3>OUR MISSION</H3>
            <Line />
            <Text>
              NCMA Monmouth serves the needs of contract management professionals in central New Jersey, giving its
              members access to the best and brightest minds in contract management in our region. We advance the
              contract management profession through advocacy and the execution of programs to connect NCMA members and
              enable their professional development.
            </Text>
          </Column>
        </Row>

        <Column>
          <H3>MEET OUR LEADERSHIP TEAM</H3>
          <Line />
          <TeamMembers>
            {map(teamMembers, (member) => {
              // Derive member properties.
              const fullName = get(member, 'fullName');
              const id = get(member, 'id');
              const image = get(member, 'image');
              const role = get(member, 'role');

              return (
                <TeamMember key={id}>
                  <Role>{role}</Role>
                  <TeamMemberImage alt="fullName" src={image} />
                  <Name>{fullName}</Name>
                </TeamMember>
              );
            })}
          </TeamMembers>
          <MeetTeamMembersLink to="/team">Get to know the officers.</MeetTeamMembersLink>
        </Column>
      </Section>

      <Section>
        <H2>JOIN NCMA MONMOUTH</H2>
        <Row>
          <StyledImage />
          <Column>
            <H3>A MESSAGE FROM THE PRESIDENT</H3>
            <Box>
              <Text>
                We have a great year planned for NCMA members! NCMA Monmouth President Jordan Smith has five reasons why
                you should join NCMA today.
              </Text>
              <LearnMoreButton>Learn More</LearnMoreButton>
            </Box>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
};

export default Contact;
