// Node modules.
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { ThemeProvider } from 'styled-components';
import * as FullStory from '@fullstory/browser';
// Other imports.
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import NavTop from './NavTop';
import config from '../config';
import theme from './theme';

// Initialize FullStory analytics.
if (process.env.GATSBY_FULL_STORY_ORG_ID) {
  FullStory.init({ orgId: process.env.GATSBY_FULL_STORY_ORG_ID });
}

const Layout = ({ className, children }) => {
  // Derive theme properties.
  const state = useState(true);
  const isLightTheme = state[0];

  // Derive config properties.
  const chapterName = get(config, 'chapterName');

  return (
    <>
      {/* SEO Metatags */}
      <Helmet>
        <html lang="en" />
        <title>NCMA {chapterName}</title>
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="description" content={`Join NCMA ${chapterName} today and gain access to exclusive benefits.`} />
      </Helmet>

      {/* Theming */}
      <ThemeProvider theme={isLightTheme ? theme.light : theme.dark}>
        {/* Global Styling */}
        <GlobalStyle />

        {/* Top Nav */}
        <NavTop />

        {/* Content */}
        <Content className={className}>{children}</Content>

        {/* Footer */}
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Layout;
