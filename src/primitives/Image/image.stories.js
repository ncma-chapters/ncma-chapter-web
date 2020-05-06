// Node modules..
import React from 'react';
import get from 'lodash/get';
import { storiesOf } from '@storybook/react';
// Relative imports.
import config from '../../config';
import Image from './index';

storiesOf('Primitives', module).add('Image', () => <Image src={get(config, 'content.home.heroImage')} />);
