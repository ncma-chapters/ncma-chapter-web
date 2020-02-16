// Dependencies.
import styled from 'styled-components';

export default styled.iframe`
  height: 515px;
  margin: 120px 0;
  width: 100%;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    height: 300px;
    margin: 40px 0 60px;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
