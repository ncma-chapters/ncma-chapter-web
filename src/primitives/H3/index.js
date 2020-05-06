// Node modules..
import styled from 'styled-components';

export default styled.h3`
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    text-align: left;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
