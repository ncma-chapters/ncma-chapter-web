// Node modules..
import styled from 'styled-components';
import { Link } from 'gatsby';

export const TeamMembers = styled.div`
  align-items: center;
  display: flex;
  margin: 50px 0 0;
  justify-content: space-between;
  width: 100%;
`;

export const MeetTeamMembersLink = styled(Link)`
  align-self: center;
  color: ${({ theme }) => theme.colors.secondary.normal};
  font-size: 1.2rem;
  font-weight: bold;
  margin: 80px 0 -80px;
  text-decoration: underline;
`;

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.greys.tint2};
  border: 1px solid ${({ theme }) => theme.colors.greys.tint};
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 -50px;
  padding: 30px 35px;
`;
