// Node modules.
import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  align-self: center;
  color: ${({ theme }) => theme.colors.secondary.normal};
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
`;

export const TeamMembers = styled.div`
  align-items: center;
  display: flex;
  margin: 50px 0 0;
  justify-content: space-between;
  width: 100%;
`;
