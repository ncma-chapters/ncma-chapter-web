// Node modules.
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import get from 'lodash/get';
import styled, { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
// Other imports.
import GlobalStyle from './GlobalStyle';
import Image from 'src/components/Image';
import theme from './theme';

const Layout = ({ children }) => {
  // Derive theme properties.
  const [isLightTheme, toggleTheme] = useState(true);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          {/* SEO Metatags */}
          <Helmet>
            <title>{get(data, 'site.siteMetadata.title')}</title>
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          </Helmet>

          {/* Theming */}
          <ThemeProvider theme={isLightTheme ? theme.light : theme.dark}>
            {/* Global Styling */}
            <GlobalStyle />

            {/* Top Nav */}
            {/* <NavTop /> */}

            {/* Content */}
            {children}

            {/* Footer */}
            {/* <Footer /> */}
          </ThemeProvider>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
