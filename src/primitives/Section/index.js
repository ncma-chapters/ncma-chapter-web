// Dependencies.
import styled from 'styled-components';

export default styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  padding: 115px 40px 0;
  width: 100%;

  ${({ largeScreenStyles }) => largeScreenStyles || ''}

  @media (max-width: 1000px) {
    padding: 40px 20px 0;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
