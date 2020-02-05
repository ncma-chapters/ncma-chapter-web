// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
// Relative imports.
import config from 'src/config';
import { Link, Image } from './styles';

const Logo = ({ className }) => (
  <Link className={className} href="/">
    <Image src={get(config, 'logo')} />
  </Link>
);

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
