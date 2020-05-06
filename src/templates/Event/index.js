// Node modules..
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/filter';
import find from 'lodash/find';
import get from 'lodash/get';
import map from 'lodash/map';
import replace from 'lodash/replace';
import toNumber from 'lodash/toNumber';
import { navigate } from 'gatsby';
// Relative imports.
import config from '../../config';
import Banner from '../../primitives/Banner';
import H2 from '../../primitives/H2';
import Hero from '../../primitives/Hero';
import Image from '../../primitives/Image';
import Layout from '../../global/Layout';
import Section from '../../primitives/Section';
import TeamMember from '../../primitives/TeamMember';
import Text from '../../primitives/Text';
import { StyledLink, TeamMembers } from './styles';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeamMember: undefined,
    };
  }

  componentDidMount() {
    const { location } = this.props;

    // Derive the selected team member.
    const teamMembers = get(config, 'teamMembers');
    const pathname = get(location, 'pathname');
    const teamMemberID = toNumber(replace(pathname, /\D+/, ''));
    const selectedTeamMember = find(teamMembers, ['id', teamMemberID]);

    // Escape early if the selectedTeamMember is not found.
    if (!selectedTeamMember) {
      navigate('/');
      return;
    }

    // Update the selectedTeamMember.
    this.setState({ selectedTeamMember });
  }

  render() {
    const { selectedTeamMember } = this.state;

    // Escape early if there's no selectedTeamMember.
    if (!selectedTeamMember) {
      return null;
    }

    // Derive config properties.
    const teamMembers = get(config, 'teamMembers');
    const content = get(config, 'content');

    // Derive the selected team member properties.
    const firstName = get(selectedTeamMember, 'firstName');
    const lastName = get(selectedTeamMember, 'lastName');
    const role = get(selectedTeamMember, 'role');
    const image = get(selectedTeamMember, 'image');
    const quote = get(selectedTeamMember, 'quote');
    const bio1 = get(selectedTeamMember, 'bio1');
    const bio2 = get(selectedTeamMember, 'bio2');
    const bio3 = get(selectedTeamMember, 'bio3');
    const email = get(selectedTeamMember, 'email');

    // Derive content properties.
    const heroImage = get(content, 'about.heroImage');

    // Derive the filtered team members.
    const filteredTeamMembers = filter(teamMembers, (member) => member.id !== get(selectedTeamMember, 'id'));

    return (
      <Layout>
        <Hero url={heroImage} />

        <Section>
          <H2 largeScreenStyles={{ marginBottom: '50px' }}>
            {firstName} {lastName}
          </H2>
          <Text largeScreenStyles={{ textAlign: 'center' }}>{role}</Text>
          <Image alt={`${firstName} ${lastName}`} src={image} />
        </Section>

        {quote && (
          <Banner>
            <Text>{quote}</Text>
          </Banner>
        )}

        {bio1 && (
          <Section>
            <H2 largeScreenStyles={{ textTransform: 'uppercase' }}>
              {firstName} {lastName}&apos;s biography
            </H2>
            {bio1 && <Text>{bio1}</Text>}
            {bio2 && <Text>{bio2}</Text>}
            {bio3 && <Text>{bio3}</Text>}
            {email && <StyledLink href={`mailto:${email}`}>Click here to contact {firstName}.</StyledLink>}
          </Section>
        )}

        <Section largeScreenStyles={{ marginBottom: '100px' }}>
          <H2>MEET THE OTHER OFFICERS</H2>
          <TeamMembers>
            {map(filteredTeamMembers, (teamMember) => (
              <TeamMember key={get(teamMember, 'id')} teamMember={teamMember} />
            ))}
          </TeamMembers>
        </Section>
      </Layout>
    );
  }
}

Event.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Event;
