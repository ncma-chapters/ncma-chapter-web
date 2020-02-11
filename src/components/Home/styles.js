// Dependencies.
import styled from 'styled-components';
import { Link } from 'gatsby';

export const TeamMembers = styled.div`
  align-items: center;
  display: flex;
  margin: 50px 0 0;
  justify-content: space-between;
`;

export const TeamMember = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
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
