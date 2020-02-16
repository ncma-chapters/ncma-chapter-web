// Dependencies.
import styled from 'styled-components';

export default styled.h3`
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0;

  ${({ largeScreenStyles }) => largeScreenStyles || ''}

  @media (max-width: 1000px) {
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
