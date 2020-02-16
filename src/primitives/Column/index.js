// Dependencies.
import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 50px;

  ${({ largeScreenStyles }) => largeScreenStyles || ''}

  @media (max-width: 1000px) {
    padding: 0;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
