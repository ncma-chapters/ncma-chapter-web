// Dependencies.
import styled from 'styled-components';
import { Link } from 'gatsby';
// Relative imports.
import Logo from '../../primitives/Logo';

export const Wrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.shade};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export const MainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  padding: 35px 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

export const SubFooter = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  max-width: 900px;
  padding: 0 0 35px;
  width: 100%;
`;

export const Line = styled.div`
  background: ${({ theme }) => theme.colors.greys.tint};
  height: 185px;
  margin-top: 15px;
  width: 4px;
`;

export const ColumnHeader = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.3rem;
  font-weight: 600;
  margin: 15px 0;
  letter-spacing: -1px;
`;

export const StyledLogo = styled(Logo)`
  margin: 0 0 10px 0;

  img {
    height: 40px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  margin: 10px 0;
`;

export const FooterExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  margin: 10px 0;
`;

export const SocialLinks = styled.div`
  align-items: center;
  display: flex;
  margin: 10px 0;
`;

export const SocialLink = styled.a``;

export const SocialIcon = styled.img`
  height: 20px;
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.greys.tint};
`;

export const Address = styled.div`
  color: ${({ theme }) => theme.colors.greys.tint};
`;

export const SubFooterLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubFooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 10px;
`;