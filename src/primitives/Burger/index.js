// Node modules.
import React from 'react';
import styled from 'styled-components';
// Relative imports.
import burgerImage from '../../assets/critical_images/burger.svg';

const Burger = styled.img`
  cursor: pointer;
  display: none;

  @media (min-width: 1001px) {
    ${({ largeScreenStyles }) => largeScreenStyles || ''}
  }

  @media (max-width: 1000px) {
    display: flex;
    padding-right: 40px;
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }

  @media (max-width: 600px) {
    padding-right: 20px;
  }
`;

// eslint-disable-next-line react/jsx-props-no-spreading
export default (props) => <Burger {...props} src={burgerImage} />;
