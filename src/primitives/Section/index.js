// Dependencies.
import styled from 'styled-components';

export default styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  overflow-x: hidden;
  padding: 115px 40px 0;
  width: 100%;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    padding: 40px 20px 0;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
