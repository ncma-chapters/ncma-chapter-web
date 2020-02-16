// Dependencies.
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const BannerWrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.greys.tint2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.greys.tint};
  border-top: 1px solid ${({ theme }) => theme.colors.greys.tint};
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  width: 100%;

  ${({ largeScreenStyles }) => largeScreenStyles || ''}

  @media (max-width: 1000px) {
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;

export const InnerBannerWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
`;

const Banner = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <BannerWrapper {...props}>
    <InnerBannerWrapper>{props.children}</InnerBannerWrapper>
  </BannerWrapper>
);

Banner.propTypes = {
  children: PropTypes.node,
};

export default Banner;
