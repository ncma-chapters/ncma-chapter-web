// Dependencies.
import styled from 'styled-components';
import { Link } from 'gatsby';
// Relative imports.
import config from 'src/config';

export const Hero = styled.div`
  background-image: url(${config.content.home.heroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;
`;

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  padding: 115px 20px 0;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 22px;
  margin: 0 0 100px;
  text-align: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 1rem;
  line-height: 28px;
  text-align: left;
`;

export const Video = styled.iframe`
  height: 515px;
  margin: 120px 0;
  width: 100%;
`;

export const BannerWrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.greys.tint2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.greys.tint};
  border-top: 1px solid ${({ theme }) => theme.colors.greys.tint};
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  width: 100%;
`;

export const Banner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 50px;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0;
`;

export const Line = styled.div`
  background: ${({ theme }) => theme.colors.greys.tint};
  margin: 20px 0;
  height: 1px;
  width: 100%;
`;

export const CallToActionButton = styled(Link)`
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary.normal};
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 60px;
  font-size: 1.3rem;
  justify-content: center;
  width: 200px;
`;

export const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 100px;
  max-width: 1000px;
  width: 100%;
`;

export const StyledImage = styled.img`
  flex: 1;
`;

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
