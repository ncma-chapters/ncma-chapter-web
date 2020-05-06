// Node modules..
import styled from 'styled-components';

export default styled.div`
  background: ${({ theme }) => theme.colors.greys.tint};
  margin: 20px 0;
  height: 1px;
  width: 100%;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
