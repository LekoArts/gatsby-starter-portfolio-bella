import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

import SEO from '../components/SEO';
import theme from '../../config/theme';

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
