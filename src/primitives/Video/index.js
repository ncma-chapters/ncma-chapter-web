// Dependencies.
import styled from 'styled-components';

export default styled.iframe`
  height: 515px;
  margin: 120px 0;
  width: 100%;

  ${({ largeScreenStyles }) => largeScreenStyles || ''}

  @media (max-width: 1000px) {
    height: 300px;
    margin: 20px 0 80px;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
