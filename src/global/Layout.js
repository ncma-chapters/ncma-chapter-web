// Node modules.
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import get from 'lodash/get';

import { StaticQuery, graphql } from 'gatsby';
// Other imports.
import Footer from './Footer';
import NavTop from './NavTop';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

const Layout = ({ children }) => {
  // Derive theme properties.
  const state = useState(true);
  const isLightTheme = state[0];

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
      render={(data) => (
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
            <NavTop />

            {/* Content */}
            <Content>{children}</Content>

            {/* Footer */}
            <Footer />
          </ThemeProvider>
        </>
      )}
    />
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
