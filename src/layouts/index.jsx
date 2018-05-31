/* eslint no-unused-expressions: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';

import SEO from '../components/SEO';
import theme from '../../config/theme';

injectGlobal`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    color: ${theme.colors.text};
    background-color: ${theme.colors.bg};
  }
  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.text};
  }
  a {
    color: ${theme.colors.primary};
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    &:hover, &:focus {
      color: ${theme.colors.text};
    }
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover, &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.primary};
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <SEO />
      {children()}
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
