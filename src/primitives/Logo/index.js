// Node modules.
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
// Relative imports.
import config from '../../config';
import { Link, Image } from './styles';

const Logo = ({ className, largeScreenStyles, smallScreenStyles }) => (
  <Link className={className} href="/" largeScreenStyles={largeScreenStyles} smallScreenStyles={smallScreenStyles}>
    <Image alt={`NCMA ${get(config, 'chapterName')} logo`} src={get(config, 'logo')} />
  </Link>
);

Logo.propTypes = {
  className: PropTypes.string,
  largeScreenStyles: PropTypes.object,
  smallScreenStyles: PropTypes.object,
};

export default Logo;
