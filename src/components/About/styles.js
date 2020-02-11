// Dependencies.
import styled from 'styled-components';

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
