// Node modules..
import styled from 'styled-components';

export default styled.div`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    height: 325px;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
