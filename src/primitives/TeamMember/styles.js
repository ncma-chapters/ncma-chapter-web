// Node modules.
import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;

export const Role = styled.h4`
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

export const TeamMemberImage = styled.img`
  border-radius: 4px;
  height: 150px;
  margin: 25px 0 10px;
  width: 150px;
`;
