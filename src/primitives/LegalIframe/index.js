// Node modules.
import styled from 'styled-components';

export default styled.iframe`
  min-height: calc(100vh - 117px);
  width: 100%;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    min-height: calc(100vh - 75px);

    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
