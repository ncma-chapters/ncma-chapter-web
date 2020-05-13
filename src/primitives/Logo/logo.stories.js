// Node modules.
import React from 'react';
import get from 'lodash/get';
import { storiesOf } from '@storybook/react';
// Relative imports.
import config from '../../config';
import Logo from './index';

storiesOf('Primitives', module).add('Logo', () => <Logo src={get(config, 'logo')} />);
