// Dependencies.
import styled from 'styled-components';

export default styled.img`
  flex: 1;

  ${({ largeScreenStyles }) => largeScreenStyles || ''}

  @media (max-width: 1000px) {
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
