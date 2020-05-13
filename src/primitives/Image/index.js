// Node modules.
import styled from 'styled-components';

export default styled.img`
  flex: 1;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    margin: 40px 0 0;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
