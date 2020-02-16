// Dependencies.
import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    padding-right: 20px;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;

export const Image = styled.img`
  height: 50px;

  @media (max-width: 1000px) {
    height: 40px;
  }
`;
