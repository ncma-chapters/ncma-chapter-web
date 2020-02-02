// Dependencies
import React from 'react';
import get from 'lodash/get';
// Relative imports.
import config from '../../config';
import { Link, Image } from './styles';

const Logo = () => (
  <Link href="/">
    <Image src={get(config, 'logo')} />
  </Link>
);

export default Logo;
