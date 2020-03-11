/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Layout = ({ children }) => <main className="layout">{children}</main>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
