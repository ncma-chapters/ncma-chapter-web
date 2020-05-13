// Node modules.
import styled from 'styled-components';

export default styled.p`
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 1rem;
  line-height: 28px;
  margin: 0 0 50px;
  text-align: left;
  width: 100%;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    text-align: left;

    &:last-of-type {
      margin: 0;
      ${({ smallScreenStyles }) => smallScreenStyles || ''}
    }

    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
