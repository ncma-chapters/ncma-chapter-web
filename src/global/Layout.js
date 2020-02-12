// Node modules.
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { ThemeProvider } from 'styled-components';
// Other imports.
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import NavTop from './NavTop';
import config from '../config';
import theme from './theme';

const Layout = ({ children }) => {
  // Derive theme properties.
  const state = useState(true);
  const isLightTheme = state[0];

  return (
    <>
      {/* SEO Metatags */}
      <Helmet>
        <title>NCMA {get(config, 'chapterName', '')}</title>
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Helmet>

      {/* Theming */}
      <ThemeProvider theme={isLightTheme ? theme.light : theme.dark}>
        {/* Global Styling */}
        <GlobalStyle />

        {/* Top Nav */}
        <NavTop />

        {/* Content */}
        <Content>{children}</Content>

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
