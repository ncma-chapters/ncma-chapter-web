// Node modules..
import styled from 'styled-components';

export default styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 100px;
  max-width: 1000px;
  width: 100%;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 0 50px;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
