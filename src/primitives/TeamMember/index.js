// Node modules..
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
// Relative imports.
import Text from '../Text';
import { Role, TeamMemberImage, Wrapper } from './styles';

const TeamMember = ({ teamMember, largeScreenStyles, smallScreenStyles }) => {
  // Derive teamMember properties.
  const firstName = get(teamMember, 'firstName');
  const id = get(teamMember, 'id');
  const image = get(teamMember, 'image');
  const lastName = get(teamMember, 'lastName');
  const role = get(teamMember, 'role');

  return (
    <Wrapper to={`/about/${id}`} largeScreenStyles={largeScreenStyles} smallScreenStyles={smallScreenStyles}>
      <Role>{role}</Role>
      <TeamMemberImage alt={`${firstName} ${lastName}`} src={image} />
      <Text largeScreenStyles={{ textAlign: 'center' }}>{`${firstName} ${lastName}`}</Text>
    </Wrapper>
  );
};

TeamMember.propTypes = {
  teamMember: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  largeScreenStyles: PropTypes.object,
  smallScreenStyles: PropTypes.object,
};

export default TeamMember;
