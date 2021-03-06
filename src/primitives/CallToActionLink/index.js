// Node modules.
import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary.shade};
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 60px;
  font-size: 1.3rem;
  justify-content: center;
  width: 200px;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    height: 55px;
    width: 175px;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
