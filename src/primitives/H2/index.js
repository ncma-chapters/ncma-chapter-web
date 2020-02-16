// Dependencies.
import styled from 'styled-components';

export default styled.h2`
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 22px;
  margin: 0 0 100px;
  text-align: center;
  width: 100%;

  ${({ largeScreenStyles }) => largeScreenStyles || ''}

  @media (max-width: 1000px) {
    font-size: 1.6rem;
    line-height: 36px;
    margin: 0 0 40px;
    text-align: left;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;
