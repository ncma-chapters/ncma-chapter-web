// Dependencies.
import styled from 'styled-components';

export default styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 100px;
  max-width: 1000px;
  width: 100%;

  ${({ largeScreenStyles }) => largeScreenStyles || ''}

  @media (max-width: 1000px) {
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
