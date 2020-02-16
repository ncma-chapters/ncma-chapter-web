// Dependencies.
import styled from 'styled-components';

export default styled.div`
  background: ${({ theme }) => theme.colors.greys.tint};
  margin: 20px 0;
  height: 1px;
  width: 100%;

  ${({ largeScreenStyles }) => largeScreenStyles || ''}

  @media (max-width: 1000px) {
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
