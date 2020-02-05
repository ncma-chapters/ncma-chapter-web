// Dependencies.
import styled from 'styled-components';
import { Link } from 'gatsby';

export const CallToAction = styled(Link)`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.greys.normal};
  cursor: pointer;
  display: flex;
  font-size: 0.8rem;
  font-weight: 500;
  justify-content: center;
  min-height: 30px;
  min-width: 100px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  max-width: 900px;
  padding: 2rem;
`;

export const Item = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 1.5rem;
  text-decoration: none;
  white-space: nowrap;
`;

export const Items = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
`;

export const Wrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.shade};
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
